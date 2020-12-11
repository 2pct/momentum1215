const form = document.querySelector(".js-form");
var input = document.querySelector("input");
const greetings = document.querySelector(".greetings");


const USER_LS = "currentUser"
const SHOWING = "showing"

var firstVisit = true


function handleSubmit(){
    event.preventDefault();
    const currentValue = input.value;
    paintGreetings(currentValue);
    localStorage.setItem(USER_LS, currentValue);
}


function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
}

function greetingsTime(text){
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();

    if (hours >= 21 || hours <= 5){
        greetings.innerText = `Good night, ${text}`
    }
    else if (hours >= 17){
        greetings.innerText = `Good evening, ${text}`
    }
    else if (hours >= 12){
        greetings.innerText = `Good afternoon, ${text}`
    }
    else{
        greetings.innerText = `Good morning, ${text}`
    }
}

function paintGreetings(text){
    form.classList.remove(SHOWING);
    if (firstVisit === true){
        greetings.innerText = `Hello ${text}`;
    }
    else{
        greetingsTime(text); 
    }
    greetings.classList.add(SHOWING);

}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        askForName();
    }
    else{
        firstVisit = false
        paintGreetings(currentUser);
    }

}



function init(){
    loadName();
}

init();
