var secondHand = document.querySelector(".second-hand")
var firstHand = document.querySelector(".hour-hand")
var minHand = document.querySelector(".min-hand")

function setDate(){
    var now = new Date();
    var seconds = now.getSeconds();
    secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    var now = new Date();
    var mins = now.getMinutes();
    minutesDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`

    var hours = now.getHours();
    hoursDegrees = ((hours / 12) * 360) + 90;
    firstHand.style.transform = `rotate(${hoursDegrees}deg)`

}

setInterval(setDate, 1000);