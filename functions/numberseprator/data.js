window.onload=function(){
document.getElementById("button").addEventListener("click", function(){
     const inputValue = document.getElementById("inputValue").value;
     const finalValue = remover(inputValue, true) 
    document.getElementById("value").innerHTML = finalValue; 
    
    //storing of inputvalues in localstorage
    let storedValues = JSON.parse(localStorage.getItem("storedValues")) || [];
    storedValues.push(finalValue);
    localStorage.setItem("storedValues", JSON.stringify(storedValues));

    displayStoredValues();
});
function displayStoredValues() {
    let storedData = localStorage.getItem('storedValues');
    if (storedData) {
        let parseData = JSON.parse(storedData);
        let output = document.getElementById("storedValuesList");
        output.innerHTML = "";

        parseData.forEach(function(value) {
            let listItem = document.createElement("li");
            listItem.textContent = value;
            output.appendChild(listItem);
        });
    }
}


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

}

