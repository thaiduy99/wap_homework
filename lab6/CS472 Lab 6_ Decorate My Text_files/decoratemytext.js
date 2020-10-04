// const fSizeCurrent = document.getElementById('id1').style.fontSize;

function bling() {
    let checked = document.getElementById('id2').checked;
    // alert("Checkbox changed "+ checked);
    changeFontWeight(checked);
}

function changeFontWeight(status) {
    // alert(id + num);
    let element = document.getElementById('id1');
    if (status){
        element.style.fontWeight = 'Bold';
        element.style.color = "blue";
        element.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }
    else {
        element.style.fontWeight = 'Normal';
    }
    
}

function fontDecorate() {
    let element = document.getElementById('id1');
    // element.style.fontSize = "24pt";  
    const elementcss = document.querySelector('textarea');
    const style = getComputedStyle(elementcss);   
    let size = parseInt(style.fontSize);
    if (size < 48){
        size = size + 4;
        element.style.fontSize = size + "px";
    } else {
        element.style.fontSize = "16px";
    }
}

function piglatin(){
    let text = document.getElementById("id1").value;
    // alert(text);
    var arr = text.split(" ");
    if (!isVowel(arr[0])){
        let newText = text.slice(1) + arr[0].charAt(0) + "ay";
        document.getElementById("id1").value = newText;
    } else {
        let newText1 = text + "ay";
        document.getElementById("id1").value = newText1;
    }
}

function isVowel(text){
    let ch = text.charAt(0);
    let vowel = ['A', 'I', 'O', 'E', 'U'];
    if (vowel.includes(ch.toUpperCase()))
        return true;
    else
        return false;
}

function malkovitch(){
    let text = document.getElementById("id1").value;
    let arr = text.split(" ");
    let newArr = arr.map(mymalkovitch);
    let str = newArr.join(" ");
    document.getElementById("id1").value = str;
}

function mymalkovitch(num){
    if (num.length > 5)
        return "Malkovich"
    else    
        return num;
}