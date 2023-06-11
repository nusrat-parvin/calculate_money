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

//add event handler to calculate button
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
 
});
// add event handler to save button
document.getElementById('btn-save').addEventListener('click' , function(){
    const getIncomeFieldToSave = getInputFieldValueById('income-field');
    const getSaveValueField = getInputFieldValueById('savings-field');

    const simplifiedValueOfSaveField = getSaveValueField / 100;
    const parcentAmount = getIncomeFieldToSave * simplifiedValueOfSaveField;

    //set the new amount to saving amount
    setElementValue('saved-amount' , parcentAmount);

    //get balance field and deduct amount and set the amount to remaining balance
    const getBalanceAmount = document.getElementById('net-balance');
    const currentAmountOfBalance = getBalanceAmount.innerText;

    //deduct the value and set
    const remainingBalance = currentAmountOfBalance - parcentAmount;
    setElementValue('final-amount' , remainingBalance);

})