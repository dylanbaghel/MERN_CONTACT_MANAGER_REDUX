require('./config/config');
//THIRD PARTY MODULES OR BUILT IN
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

//CUSTOM MODULES FILES
const { mongoose } = require('./db/mongoose');
const contacts = require('./routes/contacts');

//MIDDLEWARES
app.use(express.json());
app.use(cors());


app.use('/api/contacts', contacts);
//SERVE REACT STATIC FRONTEND
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'public')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
    });
}


//LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Server At ${process.env.PORT}`);
});