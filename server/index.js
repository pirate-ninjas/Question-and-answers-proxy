const server = require('./server.js');

const PORT = 8000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`REI proxy running on http://localhost:${PORT}`);
});