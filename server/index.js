const server = require('./server.js');

const PORT = 1000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});