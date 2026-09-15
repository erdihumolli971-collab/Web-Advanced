var button1 = document.getElementById('btn1')
var button2 = document.getElementsByClassName

var button2 = document.getElementById('btn2')
var button3 = document.getElementById('btn3')
var button4 = document.getElementById('btn4')

button1.onclick = function(){
    alert ("Hello from button1")
}

button2.onclick = function(){
    alert ("Hello from button2")
}

button3.onclick = function(){
    alert ("Hello from button3")
}

var firstButton = document.querySelector('button')

firstButton.onclick = function(){
    alert("Hello from query selector")
}

var button3 = document.getElementById('btn3');
button3.addEventListener('click', function(){
    alert('hello from event listener btn3')
})