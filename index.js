let inputData = document.getElementById("textDisplay");

//Emptying The Screen
function clearAllData() {
  inputData.value = "";
}

//Deleting OneByOne Element
function removeOneByOne() {
  let s = inputData.value;
  inputData.value = s.slice(0, -1);
}

//Assigning and Showing Value in Screen
function performOperation(data) {
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
