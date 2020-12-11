const clockTime = document.querySelector(".js-clock");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    clockTime.innerText = `${hours<10 ? `0${hours}`: `${hours}`}:${mins<10 ? `0${mins}` : `${mins}`}:${secs<10 ?  `0${secs}`:`${secs}` }`
}


function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();