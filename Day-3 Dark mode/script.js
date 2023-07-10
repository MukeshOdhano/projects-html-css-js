const container = document.querySelector('.container')
const mode = document.querySelector('.mode')

mode.addEventListener('click', ()=>{
   container.classList.toggle('dark') ? (mode.firstElementChild.className = "far fa-moon"):(mode.firstElementChild.className = "far fa-sun")
})