let nav = document.querySelector('.Nav')
let navItem = document.querySelector('.Nav_item')
let listItem = document.querySelectorAll('.List_Item')
const menuButton = document.getElementById('menuButton');

nav.addEventListener('click', ()=>{
    navItem.classList.toggle('activate')
})

listItem.forEach(listItem => {
    listItem.addEventListener('click', ()=>{
        navItem.classList.remove('activate')
        menuButton.classList.remove('opened');
        menuButton.setAttribute('aria-expanded', false);
    })
})

function toggleMenu() {
    menuButton.classList.toggle('opened');
    menuButton.setAttribute('aria-expanded', menuButton.classList.contains('opened'));
  }