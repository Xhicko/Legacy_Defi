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


  let liProjectAds = document.querySelector('.Li_Project_Advisory')
  let liStraThin = document.querySelector('.Li_Strategic_Thinking')
  let liTeamBui = document.querySelector('.Li_Team_Building')
  let liStraThin2 = document.querySelector('.Li_Strategic_Thinking2')
  let projectAds = document.querySelector('.Project_Advisory')
  let StraThin = document.querySelector('.Strategic_Thinking')
  let teamBui = document.querySelector('.Team_Building')
  let StraThin2 = document.querySelector('.Strategic_Thinking2')

  liProjectAds.addEventListener('click', ()=>{
    projectAds.style.display = 'flex'
    StraThin.style.display = 'none'
    teamBui.style.display = 'none'
    StraThin2.style.display = 'none'
    projectAds.classList.add('slide-in')
  })

  liStraThin.addEventListener('click', ()=>{
    projectAds.style.display = 'none'
    StraThin.style.display = 'flex'
    teamBui.style.display = 'none'
    StraThin2.style.display = 'none'
    StraThin.classList.add('slide-in')
  })

  liTeamBui.addEventListener('click', ()=>{
    projectAds.style.display = 'none'
    StraThin.style.display = 'none'
    teamBui.style.display = 'flex'
    StraThin2.style.display = 'none'
    teamBui.classList.add('slide-in')
  })

  liStraThin2.addEventListener('click', ()=>{
    projectAds.style.display = 'none'
    StraThin.style.display = 'none'
    teamBui.style.display = 'none'
    StraThin2.style.display = 'flex'
    StraThin2.classList.add('slide-in')
  })