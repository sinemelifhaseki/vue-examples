var itemIndex = 0;

function GetFreeItemIndex() {
	itemIndex++;
	return itemIndex;
}

var testData = [
    { Id: GetFreeItemIndex(), Text: "What is Web Servers?", IsDone: false },
    { Id: GetFreeItemIndex(), Text: "What is Webpack?", IsDone: true },
    { Id: GetFreeItemIndex(), Text: "What is Cloud & Serverless?", IsDone: false },
  ];

  var todoListApp = new Vue({
      el: '#app-todo-list',
      data: {
          todoItems: testData,
          newTodoText: ""
      },
      methods: {
        addTodo: function() {
			if (this.newTodoText.trim() === "")
				return;
			
			this.todoItems.push({ Id: GetFreeItemIndex(), Text: this.newTodoText, IsDone: false});
			this.newTodoText = "";
			
		},
		removeTodo: function(todo) {
			this.todoItems.splice(this.todoItems.indexOf(todo), 1);
		}
      }
  })