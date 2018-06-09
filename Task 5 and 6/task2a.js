const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
const db = mongoose.connect('mongodb://localhost:27017/todo');

const Todo = require('./data/user');

const AddTodo = (todo)=>{
    Todo.create(todo).then(todo=>{
        console.info('New todo added');
        db.close();
    });
}
 

const FindTodo = (name)=>{
    const search = new RegExp(name,'i');
    Todo.find({$or: [{firstname: search},{lastname: search}]}).then(todo=>{
        console.info(todo);
        console.info(`${todo.length} matches`);
        db.close();
    });
}
 
module.exports = {
    AddTodo,
    FindTodo
}

//I used command module to to the task directly.
//Documentation:
//ADD:-
//add firstname lastname number email
//FIND:-
//find name