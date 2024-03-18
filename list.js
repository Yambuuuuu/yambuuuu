		// 1.Создание нового элемента и добавление его в DOM

// 2.Удаление элемента из DOM

// 3.Изменение стилей элемента

// 4.Добавление обработчика событий к элементу

// 5.Изменение текстового содержимого элемента

//1
let newElement = document.createElement('lala')
newElement.innerText = "ya lublu ice cream"
const body = document.querySelector('body')
body.appendChild(newElement)
// newElement.innerHTML = 'Новый элемент';
// document.body.appendChild(newElement);

//2

let mymy = 
document.getElementById('mymy')
mymy.remove()