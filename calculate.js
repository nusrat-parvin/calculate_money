function getInputFieldValueById(elementId){
    const getInputField = document.getElementById(elementId);
    const inputFieldValue = getInputField.value;
    const convertValue = parseFloat(inputFieldValue);
    return convertValue;
}

//set the value at it's place
function setElementValue(elementId , value){
    const newElementValue = document.getElementById(elementId);
    newElementValue.innerText = value;
}

//add event listener to calculate button
document.getElementById('btn-calc').addEventListener('click' , function(){

    //get all the field and value using id
    const incomeField = getInputFieldValueById('income-field');
    const foodExpenseField = getInputFieldValueById('food-expense');
    const rentExpenseField = getInputFieldValueById('rent-expense');
    const clothesExpenseField = getInputFieldValueById('clothes-expense');
    
    //calculate total expense
    const totalExpenseAmount = foodExpenseField + rentExpenseField + clothesExpenseField;
    //set the total expense
    setElementValue('total-expense' , totalExpenseAmount);

    //set balance after deducting from income
    const newBalanceValue = incomeField - totalExpenseAmount;
    setElementValue('net-balance' , newBalanceValue);

    
})