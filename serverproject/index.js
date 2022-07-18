'use strict';
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/file-upload-routes');
const dataBase = require('./database');

require('dotenv').config();

const app = express();
app.use(cors());

dataBase();
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', fileRoutes.router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`server is listening on url http://localhost:${PORT}`)
);
