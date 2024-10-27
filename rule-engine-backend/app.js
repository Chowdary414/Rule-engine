const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const rulesRouter = require('./routes/rules');


const Rule = require('./models/Rule');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from the React app


app.use(bodyParser.json());
app.use('/rules', rulesRouter);
mongoose.connect('mongodb+srv://patibandlasweety:3Sygzg4PNgwL5bCN@cluster0.wofzvmj.mongodb.net/Rule-Engine?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Your routes here