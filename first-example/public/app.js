var itemIndex = 0;

function getFreeItemIndex() {
    itemIndex++;
     return itemIndex;
}

const testData = [
    { Id: getFreeItemIndex(), Text: "What is Web Servers?", isDone: false },
    { Id: getFreeItemIndex(), Text: "What is Webpack?", isDone: true },
    { Id: getFreeItemIndex(), Text: "What is Cloud & Serverless?", isDone: false },
  ];

  var todoListApp = new Vue({
      el: '#app-todo-list',
      data: {
          todoItems: testData,
          newTodoText: ""
      },
      methods: {
        addTodo: function() {
	    if (this.newTodoText.trim() === '')
                 return;
	    this.todoItems.push({ id: getFreeItemIndex(), text: this.newTodoText, isDone: false});
	    this.newTodoText = "";

	},
	removeTodo: function(todo) {
	    this.todoItems.splice(this.todoItems.indexOf(todo), 1);
	}
      }
  })
  
