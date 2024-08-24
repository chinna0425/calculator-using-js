let inputData = document.getElementById("textDisplay");

//Emptying The Screen
function clearAllData() {
    inputData.classList.remove("error-msg");
    inputData.value = "";
}

//Deleting OneByOne Element
function removeOneByOne() {
    let s = inputData.value;
    inputData.value = s.slice(0, -1);
}

//Assigning and Showing Value in Screen
function performOperation(data) {
    console.log(data)
    inputData.value += data;
}

//Performing Calculation
function resultCheck() {
    try {
        inputData.value = eval(inputData.value);
    } catch (error) {
        inputData.value = "Error";
        inputData.classList.add("error-msg");
    }
}

//using the window or keyboard operation perform
window.addEventListener("keydown", function(event) {
    let keyVal = event.key;
    if (keyVal >= '0' && keyVal <= '9') {
        performOperation(keyVal);
    }else if(keyVal==="Enter"){
        resultCheck();
    }else if(keyVal==="Backspace"){
        removeOneByOne();
    }else if(keyVal==="+" || keyVal==="-" || keyVal==="*" || keyVal==="/" || keyVal===""){
        performOperation(keyVal);
    }else if(keyVal==="Delete"){
        clearAllData();
    }
    
})
