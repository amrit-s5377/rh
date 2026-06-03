/* ======================================================
   Roosevelt Hotel — local static dev server
   Zero dependencies. Run with:  node server.js   (or: npm start)
   Then open http://localhost:5000
====================================================== */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.webmanifest': 'application/manifest+json',
  '.txt':  'text/plain; charset=utf-8',
  '.xml':  'application/xml'
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

const server = http.createServer((req, res) => {
  // strip query string, decode, and normalise to prevent directory traversal
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  let filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) {
    return send(res, 403, 'Forbidden');
  }

  fs.stat(filePath, (err, stat) => {
    // pretty URLs: "/rooms" -> "rooms.html"
    if (err && !path.extname(filePath)) {
      filePath += '.html';
      return serveFile(filePath, res);
    }
    if (err) return notFound(res);
    if (stat.isDirectory()) filePath = path.join(filePath, 'index.html');
    serveFile(filePath, res);
  });
});

function serveFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) return notFound(res);
    const type = MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    send(res, 200, data, { 'Content-Type': type });
  });
}

function notFound(res) {
  send(res, 404, '<h1>404 — Not Found</h1><p><a href="/">Back to home</a></p>',
       { 'Content-Type': 'text/html; charset=utf-8' });
}

server.listen(PORT, () => {
  console.log(`\n  Roosevelt Hotel running at  http://localhost:${PORT}\n  Press Ctrl+C to stop.\n`);
});
