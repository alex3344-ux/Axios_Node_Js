// Пример работы axios
const axios = require('axios').default;


axios.get('https://dummyjson.com/products/1').then(response => {
    console.log(response);
}).catch(error => {console.log(error)});

//===========================================================

// Хотите использовать async/await? Добавьте ключевое слово `async` к своей внешней функции/методу.
async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

//===========================================================

// По желанию вышеуказанный запрос можно выполнить так
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // выполняется всегда
  }); 
