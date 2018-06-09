const program= require('commander');
const {
    AddTodo,
    FindTodo
} = require('./task2a');

program
    .version('1.0.0')
    .description('Todo App')

program
    .command('add <firstname> <lastname> <phone> <email>')
    .alias('a')
    .description('Add a Todo')
    .action((firstname, lastname, phone, email)=>{
        AddTodo({firstname, lastname, phone, email});
    });

program
.command('find <name>')
.alias('f')
.description('find a Todo')
.action(name=>FindTodo(name));


program.parse(process.argv);