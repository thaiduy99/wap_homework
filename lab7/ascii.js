window.onload = function(){
document.getElementById('start').onclick = startAnimation;
document.getElementById('stop').onclick = stopAnimation;
document.getElementById('animation').onchange = changeAnimation;
document.getElementById('fontsize').onchange = sizeChange;
document.getElementById('turbo').onchange = turboChange;

}

var i = 0;
var animationInterval;
var interval = 250;
var subInterval = 100;
var isRunning = false;
var fontList = {
    "Tiny" : "7pt",
    "Small" : "10pt",
    "Medium" : "12pt",
    "Large" : "16pt", 
    "Extra Large" : "24pt",
    "XXL" : "32pt",
}

function startAnimation() {
    isRunning = true;
    i = 0;
    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
    var animationType = document.getElementById('animation').value;
    let animationString =  ANIMATIONS[animationType];
    let animatioinFrame = animationString.split("=====\n");
    animationInterval = setInterval(function(){
        document.getElementById('text-area').value =  animatioinFrame[i];
        i++;  
        if (i > animatioinFrame.length - 1)
            i = 0;
    }, interval);
}

function stopAnimation() {
    isRunning = false;
    clearInterval(animationInterval);
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
}

function changeAnimation() {
    if (isRunning){
        stopAnimation();
        startAnimation(); 
    } 
}

function sizeChange() {
    //Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)e (16pt)
    let size = document.getElementById('fontsize').value;
    document.getElementById('text-area').style.fontSize = fontList[size];
}

function turboChange(){
    // alert("dddd");
    if (document.getElementById('turbo').checked){
        interval -= subInterval;
        stopAnimation();
        startAnimation();   
    } else {
        interval += subInterval;
        stopAnimation();
        startAnimation(); 
    }
}

function sum(arr){
    // let arr1 = arr;
    const sumF = (value1, value2) => value1 + value2; 
    var sum = arr.reduce(sumF);            
    return sum;
}

//5b. multiply
function multiply(arr){
    // let arr1 = arr;
    const mulF = (value3, value4) => value3 * value4;
    var multiply = arr.reduce(mulF);
    return multiply;
}

//6. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(str){
    var arrReverse = str.split("").reverse().join("");
    //document.getElementById("reverseString").value = arrReverse;
    return arrReverse;
}

 //8. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(arrs, number){
    var result = arrs.filter(function(item) {
        return item.length > number;
    });
    //document.getElementById("filterednum").value = result;
    return result;
}