let display = document.querySelector('input');
function appendToDisplay(character){  
    display.value += character;  
}

function clearDisplay(){
    display.value = ""; 
}

function calculate(){
    let str = display.value;
    try{
        display.value = eval(str);
    }
    catch(e){
        display.value = "Error";
    }
}
