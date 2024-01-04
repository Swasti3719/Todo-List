const mongoose = require("mongoose") ;
mongoose.connect("mongodb+srv://Swasti:4OKggkD3Fi9aIaKR@cluster0.ioc2hna.mongodb.net/todo") ;
const todoSchema = mongoose.Schema({
    title:String ,
    description:String ,
    completed:Boolean
})
const todo = mongoose.model('todos',todoSchema) ;

module.exports = {
    todo
}