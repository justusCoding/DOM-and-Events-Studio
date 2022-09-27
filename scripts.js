// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {

    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocket = document.getElementById("rocket");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "0px";

    let takeoff = document.getElementById("takeoff")
    takeoff.addEventListener("click", function () {
        let isReady = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (isReady) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML =  10000;
        }
    });


    let land = document.getElementById("landing")
    land.addEventListener("click", function () {
        let isReady = window.alert("The Shuttle is landing. Lannding gears engaged ");
        flightStatus.innerHTML = "Shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocket.style.bottom = "0px";
    });



    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function(){

        let isReady = window.confirm("Confirm you want to abort the mission");
        if (isReady){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocket.style.bottom = "0px";
    
        }
    })





    let up = document.getElementById("up");
    up.addEventListener("click", function(){
        rocket.style.bottom = (parseInt(rocket.style.bottom) + 10) + 'px';
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    })


    let down = this.document.getElementById("down");
    down.addEventListener("click", function(){
        rocket.style.bottom = (parseInt(rocket.style.bottom) - 10) + 'px';
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    })




    let left = document.getElementById("left");
    left.addEventListener("click", function(){
        rocket.style.left =  (parseInt(rocket.style.left) - 10) + 'px';
    })


    let right = document.getElementById('right');
    right.addEventListener("click", function(){
        rocket.style.left =  (parseInt(rocket.style.left) + 10) + 'px';
    })

















});
