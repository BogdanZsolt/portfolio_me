import './index.scss'

const sections = document.querySelectorAll('.section')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector('.main-content')
const firstSkill = document.querySelector('.skill:first-child')
const skCounters = document.querySelectorAll('.counter span')
const progressBars = document.querySelectorAll('.skill svg circle')



function PageTransitions(){
 // Button click active class
 for(let i = 0; i < sectBtn.length; i++){
  sectBtn[i].addEventListener('click', function() {
   let currentBtn = document.querySelectorAll('.active-btn')
   currentBtn[0].className = currentBtn[0].className.replace('active-btn', '')
   this.className += ' active-btn'
  })
 }

 // Sections Active class
 allSections.addEventListener('click', (e) => {
  const id = e.target.dataset.id
  if(id){
   // hide other section
   sections.forEach((section) => {
    section.classList.remove('active')
   })

   const element = document.getElementById(id)
   element.classList.add('active')
  }
 })

 // Toggle theme
 const themeBtn = document.querySelector('.theme-btn')
 themeBtn.addEventListener('click', ()=> {
  let element = document.body
  element.classList.toggle('light-mode')
 })
}

PageTransitions()