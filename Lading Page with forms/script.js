const signBtn = document.getElementById("sign-btn")
const logBtn = document.getElementById("login-btn")

const loginForm = document.getElementById("login");
const signForm = document.getElementById("signup")

const closeBtn = document.querySelectorAll(".cross")
const formWraper = document.querySelectorAll('.forms-wraper')
// console.log(closeBtn, formWraper)

window.addEventListener("DOMContentLoaded", ()=>{
    signBtn.addEventListener("click", ()=>{
        if(loginForm.classList.contains("active")){
            loginForm.classList.remove("active")
        }
        signForm.classList.toggle('active')
    })
    logBtn.addEventListener("click", ()=>{
        if(signForm.classList.contains("active")){
            signForm.classList.remove("active")
        }
        loginForm.classList.toggle("active")
    })

    for(let i = 0; i < formWraper.length; i++){
        closeBtn[i].addEventListener("click", ()=>{
            formWraper[i].classList.remove("active")0
            
        })
    }
})