 let number = document.querySelector(".timer");
let start = document.querySelector(".start");
let stops = document.querySelector(".stop");
let form = document.querySelector("#forms");

let shows = document.createElement("h2");
form.appendChild(shows);
shows.classList.add("timer-value");

shows.innerText = ""; 

let countdown =null;

start.addEventListener("click", () => {
  let time = parseInt(number.value);
  if (isNaN(time) || time <= 0) return;

  clearInterval(countdown);

  countdown = setInterval(() => {
    shows.innerText = time;
    if (time-- <= 0) {
        clearInterval(countdown);
        shows.innerText = "Time's up!";
        countdown=null;
    }
  }, 1000);
});

stops.addEventListener("click",()=>{
    if(countdown !==null){
    clearInterval(countdown);
    shows.innerText="Timer stopped!";
    }
});
