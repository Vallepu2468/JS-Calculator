//Calculator program

const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
      
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }
    
}

// eval use to calculate (1+2+3)