
const express = require('express');
const app = express();
const port = 3000;

//Middlewares
app.use(express.json());

app.get('/',(req, res)=> res.send('Hello World!'));
app.get('/login',(req, res)=> res.send('login'));



app.listen(port, ()=> console.log(`Node server up and running at http://localhost:${port}`));
