// Navigation Logic
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


  // Service Hidden And Reveal logic
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


// Reveal Accordion Icon Logic
let experienceToggle = document.querySelectorAll('.toggleExperience')
let toggleIcon = document.querySelectorAll('.toggle_icon')

experienceToggle.forEach((iconToggle, index) => {
  let isPlus = true

  iconToggle.addEventListener('click', () => {
    if (isPlus) {
      toggleIcon[index].style.transform = 'rotate(45deg)'
    } 
  
    else {
      toggleIcon[index].style.transform = 'rotate(0deg)'
    }
    
    isPlus = !isPlus

  })
})

// Accordion Logic
let exWrapList = document.querySelectorAll('.Experience_Wrapper')
let exDetailsList = document.querySelectorAll('.Experience_Details')
let isExpandedList = Array.from({ length: exDetailsList.length }, () => false);

exWrapList.forEach((exWrap, index) => {
  let exDetail = exDetailsList[index]

  exWrap.addEventListener('click', () => {
      const isExpanded = isExpandedList[index];

      if (!isExpanded) {
            // Close all open Experience_Details
              exDetailsList.forEach((detail, i) => {
                if (i !== index) {
                  detail.style.maxHeight = '0';
                  isExpandedList[i] = false;
                }
              });

              // Close the clicked Experience_Detail
          exDetail.style.maxHeight = exDetail.scrollHeight + 'px'
        } 

        else {
        exDetail.style.maxHeight = '0'
      }
       // Toggle the state of the clicked Experience_Detail
      isExpandedList[index] = !isExpanded
    })
})







