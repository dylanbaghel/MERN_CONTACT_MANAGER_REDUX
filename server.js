require('./config/config');
//THIRD PARTY MODULES OR BUILT IN
const express = require('express');
const app = express();
const cors = require('cors');

//CUSTOM MODULES FILES
const { mongoose } = require('./db/mongoose');
const contacts = require('./routes/contacts');

//MIDDLEWARES
app.use(express.json());
app.use(cors());


app.use('/api/contacts', contacts);
//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Server At ${process.env.PORT}`);
});