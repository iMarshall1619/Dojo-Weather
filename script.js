var cookAlert = document.getElementById('cookAlert');
const rectify = {
    "f" : c => (9/5 * c + 32).toPrecision(2),
    "c" : f => (5/9 * (f - 32)).toPrecision(3)
}

function goodBye() {
    cookAlert.remove();
}

function tempChange(type) {
    for(let temp of document.querySelectorAll(".high,.low")){
        temp.innerHTML = rectify[type](parseFloat(temp.innerHTML + '&#176;'))
    }
}
