function getInputFieldValueById(elementId){
    const getInputField = document.getElementById(elementId);
    const inputFieldValue = getInputField.ariaValueMax;
    const convertValue = parseFloat(inputFieldValue);
    return convertValue;
}

//add event listener to calculate button
