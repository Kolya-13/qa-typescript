

function fetchTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); 
    })
    .then(data => {
      processTodos(data); 
    })
    .catch(error => {
      console.error(" Помилка запиту:", error.message);
    });
}


function processTodos(todos) {
  console.log(" Отримано задач:", todos.length);


  const completed = todos.filter(todo => todo.completed).slice(0, 5);
  completed.forEach((todo, index) => {
    console.log(` #${index + 1}: ${todo.title} (ID: ${todo.id})`);
  });
}


fetchTodos();