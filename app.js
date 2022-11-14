import express from 'express';
//import data from './data';
import TaskController from './Controllers/TasksController.js';
//const express = require('express')
const app = express()
const port = 3000

// module.exports = app;
// const server = http.Server(app);
// server.listen(3000, () => {
//        return true;
// });
//app.use(express.static('public'))

app.put('/tasks/:id', TaskController.update) ;
  
app.post('/tasks/',TaskController.add); 

app.get('/:id',TaskController.getById);

app.delete('/tasks/:id',TaskController.delete);

app.get('/tasks/',TaskController.getList); 
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})