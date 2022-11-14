import express from 'express';
//import bodyParser, { json } from 'body-parser';
import data from '../data.js'
import bodyParser from "body-parser"
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.raw());
app.use(bodyParser.text());
//app.use(express.static('public'))

const TasksController={
    //finish
    getList: (req,res)=>{
        console.log(req.query)
        res.send(JSON.stringify(data))
    },
//לדעתי גם טוב
    getById: (req,res)=>{
        data.tasks.filter(Object=>{
            if(Object.id==req.params.id)
            {
                res.send(json.stringify(data.tasks))
            }
        })
    },
//הצלחתי לבד
    add: (req,res)=>{
        data.tasks.push(req.body);
        res.send(json.stringify(data.tasks))
    },
//לדעתי גם טוב
    update: (req,res)=>{
       //אפשר גם map
        data.tasks.filter(Object=>{
            if(Object.id==req.params.id)
            {
              data.tasks.name=req.params.name;
              data.tasks.status=req.params.status;
              data.tasks.duration=req.params.duration;
              data.tasks.priority=req.params.priority;
            }
        } )
        res.send(json.stringify(data.tasks))
    },

    delete: (req,res)=>{
        //let remainingArr=null;
       // remainingArr=data.tasks.map(datalist=>datalist.id != req.params.id);
      // data.tasks=remainingArr;
      //remainingArr = data.tasks.filter(datalist => datalist.id != req.params.id);
        for(let index in data.tasks)
        {
            if(data.tasks[index].index==req.params.id)
            {
                data.tasks.splice(index,1)
            }
        }
        res.send(json.stringify(data.tasks))
    }
}
export default TasksController;