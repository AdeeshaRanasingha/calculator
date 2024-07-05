function fn0(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 0;
    
}
function fn1(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 1;
    
}
function fn2(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 2;
    
}
function fn3(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 3;
    
}
function fn4(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 4;
    
}
function fn5(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 5;
    
}
function fn6(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 6;
    
}
function fn7(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 7;
    
}
function fn8(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 8;
    
}
function fn9(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 9;
    
}
function fnerace(){
    let previous = document.getElementById("display").innerHTML;
    let erase = previous.slice(0,-1);
    document.getElementById("display").innerHTML = erase;
}

let firstSave;
let op;

function fnAD(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = 1;
}

function fnSB(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = 2;
}

function fnML(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = 3;
}

function fnDV(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = 4;
}

let secondSave;
function fnEQ(){
    secondSave = document.getElementById("display").innerHTML;

    if(op==1){
        let answer = parseInt(firstSave) + parseInt(secondSave);
        document.getElementById("display").innerHTML = answer;
    }
    else if(op == 2){
        let answer = parseInt(firstSave) - parseInt(secondSave);
        document.getElementById("display").innerHTML = answer;
    }
    else if(op == 3){
        let answer = parseInt(firstSave) * parseInt(secondSave);
        document.getElementById("display").innerHTML = answer;
    }
    else if(op == 4){
        let answer = parseInt(firstSave) / parseInt(secondSave);
        document.getElementById("display").innerHTML = answer;
    }
    
}
function fnAC(){
    firstSave=0;
    secondSave=0;

    document.getElementById("display").innerHTML = 0;
    op=0;
}
