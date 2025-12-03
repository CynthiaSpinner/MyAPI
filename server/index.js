const express = require('express');
require('dotenv').config();

//import the db functions
const { testConnection } = require('../db/connection');
const characterQueries = require('../db/characterQueries');
const requestLogQueries = require('../db/requestLogQueries');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware to parse JSON request bodies
app.use(express.json());