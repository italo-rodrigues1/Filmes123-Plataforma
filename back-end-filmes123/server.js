const routes = require('./Routes');

const express = require('express');

const server = express();

const cors = require('cors');

const PORT = process.env.PORT || 3333;

console.log("Aplicação está em execução...");

server.use(cors());

server.use(express.json());

server.use(routes);

server.listen(PORT);



// require('dotenv').config();

// const express = require('express');
// const routes = require('./src/routes/usersRoutes');
// const cors = require('cors');
// const connectToDatabase = require('./src/database/index');

// const server = express();

// const PORT = process.env.PORT || 3333;

// connectToDatabase();

// server.use(cors());

// server.use(express.json());

// server.use(routes);

// server.listen(PORT,() => {
//     console.log(`Aplicação está em execução`);
// });