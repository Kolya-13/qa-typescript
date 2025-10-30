async function getData() {
  try {
   
    const response = await fetch("https://jsonplaceholder.typicode.com/todozzz");

    
    if (!response.ok) {
      throw new Error("Помилка: ресурс не знайдено. Пробую інший...");
    }

    const data = await response.json();
    console.log("Дані отримано:", data);

  } catch (error) {
    console.warn(error.message);

    try {
      const response2 = await fetch("https://jsonplaceholder.typicode.com/todos");

      if (!response2.ok) {
        throw new Error("Сервер відповів з помилкою навіть вдруге!");
      }

      const data2 = await response2.json();
      console.log("Дані з другого запиту:", data2.slice(0, 5));

    } catch (finalError) {
      console.error("Фатальна помилка:", finalError.message);
    }
  }
}


getData();