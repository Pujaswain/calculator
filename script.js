let input = document.getElementById('inputBox');//to get element by user in input box
let buttons = document.querySelectorAll('button');//to get all button in this variable

let string = "";//  to store result 
let arr = Array.from(buttons);// array class with button function
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);// in bulit function
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);// substring function 
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})