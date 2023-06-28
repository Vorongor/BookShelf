function getCategories() {
    // Виконати HTTP GET запит на сервер для отримання списку категорій
    fetch('https://books-backend.p.goit.global/categories')
      .then(response => response.json())
      .then(data => {
        // Після успішного отримання відповіді від сервера
        // Викликати функцію для створення списку категорій
        createCategoriesList(data);
      })
      .catch(error => {
        // Обробити помилку, якщо виникла
        console.log('Помилка при отриманні списку категорій:', error);
      });
  }
  function createCategoriesList(categories) {
    // Знайти елемент списку за його ідентифікатором
    const categoriesList = document.getElementById('categoriesList');
  
    // Створити елементи списку категорій та додати їх до списку
    const list = document.createElement('div');
    list.className = 'list';
  
    const title = document.createElement('h2');
    title.className = 'list-title';
    title.textContent = 'ALL CATEGORIES';
  
    list.appendChild(title);
  
    for (const category of categories) {
      const categoryItem = document.createElement('p');
      categoryItem.textContent = category.name;
      list.appendChild(categoryItem);
    }
  
    categoriesList.appendChild(list);
  }
    
  getCategories ();