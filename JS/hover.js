// photo credits 
const hideClock = document.querySelector(".js-clock");
const hideForm = document.querySelector(".js-form");
const hideGreetings = document.querySelector(".js-greetings");
const hideQuestion = document.querySelector("h2");
const hideTodoForm = document.querySelector(".js-todoForm");
const hideTodoList = document.querySelector(".js-todoList");
const photoSource = document.querySelector("#photoCredit");
const list = [hideClock, hideForm, hideGreetings, hideQuestion, hideTodoForm, hideTodoList];

function handleMouseEnter(){
    for (h of list){
        h.classList.add("hide");
    }
}

function handleMouseLeave(){
    for (h of list){
        h.classList.remove("hide");
    }
}





function init(){
    photoSource.addEventListener("mouseenter", handleMouseEnter);
    photoSource.addEventListener("mouseleave", handleMouseLeave);
}

init();
