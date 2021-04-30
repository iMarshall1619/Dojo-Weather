var cookAlert = document.getElementById('cookAlert');
var tempsF = document.querySelectorAll('temps');
var tempsC = document.querySelectorAll('temps');

function goodBye() {
    cookAlert.remove();
}

function toFahr(element) {
    console.log(element);


}

function GetSelectedTextValue(temp) {
    var selectedText = temp.options[temp.selectedIndex].innerHTML;
    console.log()
}