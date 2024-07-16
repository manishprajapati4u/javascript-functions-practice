window.onload=function(){
document.getElementById("button").addEventListener("click", function(){
     const inputValue = document.getElementById("inputValue").value;
     const finalValue = remover(inputValue, true) 
    document.getElementById("value").innerHTML = finalValue; 

});

function remover(seprater,decimal){
    try{
        if(decimal){
            seprater = Math.trunc(seprater);
        }
    formatedvalue = seprater.toLocaleString();
   return formatedvalue;
    }
    catch(error){
        return "";
    }
} 
function appendFormattedValue(value) {
    const valueContainer = document.getElementById("value");
    const currentValue = valueContainer.innerHTML;
    const newValue = currentValue + "<br>" + value;
    valueContainer.innerHTML = newValue;
}
}

