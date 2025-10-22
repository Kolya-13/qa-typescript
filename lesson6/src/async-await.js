
async function fetchTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const todos = await response.json();
    processTodos(todos); 
  } catch (error) {
    console.error("❌ Помилка запиту:", error.message);
  }
}


function processTodos(todos) {
  console.log("✅ Отримано задач:", todos.length);

  const completed = todos.filter(todo => todo.completed).slice(0, 5);
  completed.forEach((todo, index) => {
    console.log(`🔹 #${index + 1}: ${todo.title} (ID: ${todo.id})`);
  });
}


fetchTodos();