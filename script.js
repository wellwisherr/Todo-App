
// Methods
var todoControl = {

  todoAddButton: function () {
    document.querySelector(todoOptions.todoAddBtn).addEventListener("click", function(){
      todoControl.addTodo();
    });
  },

  addTodo : function () {

    var todoInput = document.querySelector(todoOptions.todoInputField);
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");

    createCheckBtn  = this.selectTodo(todoDiv);

    createTodoItem  =  this.createTodoItem(todoDiv);

    deleteTodo = this.createDeleteBtn(todoDiv);

    // completeTodo = this.completeTodo(todoDiv);
   
    
    todoDiv.appendChild(deleteTodo);   

    // append the todo elements to the list
    todoListAppend = document.querySelector(todoOptions.todoList);
    todoListAppend.appendChild(todoDiv);
    todoInput.value = "";

  },

  // fucntion to create check button
  selectTodo : function(todo){
         // check button

         var selectTodoBtn = document.createElement("INPUT");
         selectTodoBtn.setAttribute("type", "checkbox");
        //  var selectTodoBtn = document.createElement("button");
         selectTodoBtn.classList.add("complete-todo");
        //   selectTodoBtn.innerHTML = '<i class="fa fa-circle-o"></i>'; 
         todo.appendChild(selectTodoBtn);
        //  selectTodoBtn.addEventListener("click", function(item){     
        //   todoControl.completeTodo(item);
        // });
  },


  // function to create list item element li
  createTodoItem :  function (todoDiv){
    var todoListItem = document.createElement('li');    
    todoListItem.classList.add("todo-item");
    todoListItem.innerText = todoInput.value;    
    todoDiv.appendChild(todoListItem);
    return todoListItem;
  },

    // function to create delete button 
 createDeleteBtn :  function (item){

  deleteTodo =  document.createElement("button");
  deleteTodo.classList.add("delete-btn");
  deleteTodo.innerHTML = '<i class="fa fa-trash-o"></i>'; 
  deleteTodo.addEventListener("click", function(item){     
    todoControl.deleteTodo(item);
  });
  return deleteTodo;
},
  
  // function to remove item from the list
  deleteTodo : function (item) {
    item = item.target;   
    todoElement =  item.parentElement;
    todoItem = todoElement.parentElement;
    console.log(todoItem);
    todoItem.remove();
  },
  

 completeTodo :  function (item){

   item = item.children[0];
  // console.log(item);
   if(item.classList == "complete-todo") {

      item.classList.remove("complete-todo");
      item.classList.add("completed-todo");

   }
 }  


};

var todoOptions = {
  todoInputField : '#todoInput',
  todoAddBtn : '#todoAddBtn',
  todoList : '.todo-list',

}


todoControl.todoAddButton();
