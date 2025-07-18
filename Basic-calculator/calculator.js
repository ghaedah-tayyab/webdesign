const buttons= document.querySelectorAll('button');
const inputFeild= document.getElementById('result');

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',() =>{
    const buttonValue= buttons[i].textContent;
    if(buttonValue==="C"){
        clearResult();
    }else if(buttonValue === "="){
         calculateResult();
    }else{
        appendValue(buttonValue);
    }
    } );
};  

function clearResult(){
    inputFeild.value= null;
}


function calculateResult(){
 inputFeild.value = eval(inputFeild.value);
}

function appendValue(buttonValue){
  inputFeild.value += buttonValue;
}
