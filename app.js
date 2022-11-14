import express from 'express';
//import data from './data';
import TaskController from './Controllers/TasksController.js';
//const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

function middleware(req,res,next){
  console.log('middleware');
  if(req.query.stop == 1){
    console.log('out', req.query);
    res.send('out');
    return;
  }
  next();
}
function auth(req,res,next){
console.log('auth');
let user=req.query;
req.user=user;
next();
}

app.put('/tasks/:id', TaskController.update) ;
  
app.post('/tasks/',TaskController.add); 

app.get('/:id',TaskController.getById);

app.delete('/tasks/:id',TaskController.delete);

app.get('/tasks/',TaskController.getList); 
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
