import { item } from "./index.js";

function create(title,description,date,priority){
    const todo = new item(title,description,date,priority);
    console.log(todo);
}