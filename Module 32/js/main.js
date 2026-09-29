var text = "The best school in the world is Digital School!";
var result = text.search("Digital School");
document.getElementById("result1").innerHTML = result;

var text = "The best school in the world is Digital School!";
var result = text.search(/Digital School/);
document.getElementById("result2").innerHTML = result;

var text = "The best school in the world is Digital School!";
var result = text.replace(/Digital School/,"Another School");
document.getElementById("result3").innerHTML = result;

var text = "abcdef";
var regex = new RegExp('abc');
document.getElementById("result4").innerHTML = regex.test(text);

var text = "My school is the best school in the world";
var regex = /school/g;
document.getElementById("result5").innerHTML = text.match(regex);

var text = "Digital school is the best school in the world";
var regex =/i/g;
document.getElementById("result6").innerHTML = text.match(regex);

var text = "Digital school is the best school in the world";
var regex =/[abc]/g;
document.getElementById("result7").innerHTML = text.match(regex);

var text = "Digital school is in top 10 best schools of the world";
var regex = /[0-9]/g;
document.getElementById("result8").innerHTML = text.match(regex);

var text = "My school is the best school in the world"
var regex = /(top|best|school)/g;
document.getElementById("result9").innerHTML = text.match(regex);