let hour = document.getElementById("hour")
let minute = document.getElementById("min")
let seconds = document.getElementById("sec")
let period = document.querySelector(".meridiem")

window.addEventListener("DOMContentLoaded", ()=>{
    setInterval(()=>{
        const date = new Date()
        period.innerText = date.getHours() >= 12 ? 'Pm' : 'am';
        hour.innerText = date.getHours() % 12
        minute.innerText = date.getMinutes()
        seconds.innerText = date.getSeconds()  
    })
})        