const inputE1= document.getElementById("weight");
const errorE1 = document.getElementById("error");
const resulutE1 = document.getElementById("result");


let errorTime;
let resultTime; 

function updateResults(){
    
  
    if(inputE1.value <= 0 || isNaN(inputE1.value)){
        errorE1.innerText = "Please enter a valid number!";

        clearTimeout(errorTime);

        errorTime = setTimeout(()=>{
          errorE1.innerText = "";
          inputE1.value = "";
        }, 2000);
    }else{
         resulutE1.innerHTML = (+inputE1.value / 2.2).toFixed(2);
         clearTimeout(resultTime);
         resultTime = setTimeout(()=>{
            resulutE1.innerText = "";
            inputE1.value = "";
         },5000);

    }
  
};




weight.addEventListener("input", updateResults);
