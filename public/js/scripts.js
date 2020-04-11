class UI {
  message(message) {
    setTimeout(() => {
      console.clear();
    }, 1000)
    console.log(`Message: ${message}`);
  }
  remove(element) {
    element.remove();
  }
  removeChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
}

const ui = new UI();

let word = [];
let wordString = "";

const btnData = document.getElementById('btn-data');
const buscador = document.getElementById('buscador');
const busqueda = document.getElementById('busqueda');

const peticionBusqueda = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      ui.removeChildren(busqueda)
      const fragment = document.createDocumentFragment();

      for (const user of data) {
        if (user.name.toLocaleLowerCase().includes(wordString)) {
          const listItem = document.createElement('LI');
          listItem.className = 'buscador__form__list__item'
          listItem.innerHTML = `
          <figure class="buscador__form__list__item__img">
            <img src="assets/img/icons/user.svg" alt="user__list">
          </figure>
          <div class="buscador__form__list__item__data">
            <p class="buscador__form__list__item__data__title">${user.name}</p>
            <p class="buscador__form__list__item__data__text">${user.address.street},${user.address.city}</p>
          </div>
          `;
          fragment.appendChild(listItem)
        }
      };
      busqueda.append(fragment)
    })
    .catch(err => console.log(err));
}



buscador.addEventListener('keyup', (e) => {
  const key = e.key.toLocaleLowerCase();
  if (key === "backspace") {
    word.pop(word[word.length]);
    wordString = word.join('');
    peticionBusqueda()
    if (buscador.value === "") {
      console.log('a')
      wordString = "";
      word = [];
      setTimeout(() => {
        ui.removeChildren(busqueda)
      }, 500)
    }
  } else {
    if (key.length === 1) {
      word.push(key);
      wordString = word.join('');
      peticionBusqueda();
    }
  }
})

btnData.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      const fragment = document.createDocumentFragment();
      const contenido = document.getElementById('contenido');
      for (const user of data) {
        const article = document.createElement('ARTICLE');
        article.className = 'article'
        article.innerHTML = `
        <h1 class="article__title">${user.name}</h1>
        <figure class="article__img">
          <img src="assets/img/icons/user.svg" alt="usuario">
        </figure>
        <div class="article__text"><span><i class="fas fa-user"></i></span> <p>${user.username}</p></div>
        <div class="article__text"><span><i class="fas fa-envelope"></i></span>  <p>${user.email.toLocaleLowerCase()}</p></div>
        <div class="article__text"><span><i class="fas fa-map-marked-alt"></i></span>  <p>${user.address.street},${user.address.city}</p></div>`;
        fragment.appendChild(article)
        ui.remove(btnData);
      }
      contenido.appendChild(fragment);
    })
    .catch(err => console.log(err));
})