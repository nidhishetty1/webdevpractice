var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while (input!=="quit") {
    if (input==="list"){
        listTodo();
    } else if (input==="new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}

function listTodo(){
    todos.forEach(function(todo, i) {
        console.log("************");
        console.log(i + ": " + todo);
    })
}

function addTodo(){
    var newtodo = prompt("Enter new todo");
    todos.push(newtodo);
}

function deleteTodo(){
    var deltodo = prompt("Item # to delete")
    var removeitem = todos.splice(deltodo-1, 1);
}
console.log("Okay, you've quit the app");
