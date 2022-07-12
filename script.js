// global variables 
var todoArray = [];
var todoInput = document.querySelector("#todoInput");
var todoListAppend = document.querySelector('.todo-list');

// Methods
var todoControl = {

  todoAddButton: function () {
    var todoInput = document.querySelector(todoOptions.todoInputField);  
    document.querySelector(todoOptions.todoAddBtn).addEventListener("click", function(){      
     
    todoListAppend.innerHTML = "";
      todoArray.push(todoInput.value);
      todoControl.showTodoList();
      
    });

    todoInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); 
      document.querySelector(todoOptions.todoAddBtn).click();
    }
  });
  },

  addTodo : function (value) {
    
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-div");
    createCheckBtn  = this.selectTodo(todoDiv);
    createTodoItem  =  this.createTodoItem(todoDiv, value);
    deleteTodo = this.createDeleteBtn(todoDiv);   
    
    todoDiv.appendChild(deleteTodo); 
    
    todoInput.value = "";

    // append the todo elements to the list
   
    todoListAppend.appendChild(todoDiv);
   

  },
  
//   show todo list
  showTodoList : function (){
    console.log( todoListAppend);
    todoArray.forEach(function(value){
      if(value){
        todoControl.addTodo(value);
      }
    });
     
  },

  // fucntion to create check button
  selectTodo : function(todo){
         // check button
         var selectTodoBtn = document.createElement("INPUT");
         selectTodoBtn.setAttribute("type", "checkbox");
         selectTodoBtn.classList.add("complete-todo");
        
         todo.appendChild(selectTodoBtn);
  },


  // function to create list item element li
  createTodoItem :  function (todoDiv, value){

  
    var todoListItem = document.createElement('li');    
    todoListItem.classList.add("todo-item");
    todoListItem.innerText = value;    

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
    todoItem.remove();
    todoArray.pop(todoInput.value);
  },


};

var todoOptions = {
  todoInputField : '#todoInput',
  todoAddBtn : '#todoAddBtn',
  todoList : '.todo-list',

}


todoControl.todoAddButton();
