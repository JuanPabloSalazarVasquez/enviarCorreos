require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('port', process.env.PORT || 5000);

app.get('/',(req,res)=>{
    res.send('<h1>¡¡Un título!!</h1>');
})

app.use(require('./routes'));



app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})