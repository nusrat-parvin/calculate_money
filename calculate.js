function getInputFieldValueById(elementId){
// validate number
// if (typeof elementId === "string" || typeof elementId === " " || typeof elementId < 0) {
//             alert('Please enter a valid number');
//         }

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

// validation || typeof value === " " || typeof value < 0)
// function isNumber(value) {
//     if (typeof value === "string"){
//         alert('Please enter a valid number');
//     }
//     else if(typeof value === " "){
//         alert("all field are required to be fill");
//     }
//     else if(typeof value < 0){
//         alert("numbers can not be negative");
//     }
// }

//add event handler to calculate button
document.getElementById('btn-calc').addEventListener('click' , function(){

    //get all the field and value using id
    const incomeField = getInputFieldValueById('income-field');
    const foodExpenseField = getInputFieldValueById('food-expense');
    const rentExpenseField = getInputFieldValueById('rent-expense');
    const clothesExpenseField = getInputFieldValueById('clothes-expense');
    
    //calculate total expense and set the total expense
    const totalExpenseAmount = foodExpenseField + rentExpenseField + clothesExpenseField;

    //validate if expense is more the income
    if(totalExpenseAmount > incomeField){
        alert("Your expense is more then your income");
    }
    else{
        setElementValue('total-expense' , totalExpenseAmount);
    }

    //set balance after deducting from income
    const newBalanceValue = incomeField - totalExpenseAmount;
    setElementValue('net-balance' , newBalanceValue);
 
});
// add event handler to save button
document.getElementById('btn-save').addEventListener('click' , function(){
    const getIncomeFieldToSave = getInputFieldValueById('income-field');
    const getSaveValueField = getInputFieldValueById('savings-field');
    const getBalanceAmount = document.getElementById('net-balance');

    //validate saving amount
    if(getSaveValueField > 100){
        alert("saving is more then income");
    }
    else{
        alert("There is no income amount");
    }

    const simplifiedValueOfSaveField = getSaveValueField / 100;
    const parcentAmount = getIncomeFieldToSave * simplifiedValueOfSaveField;

    //get balance field and deduct amount and set the amount to remaining balance
    const currentAmountOfBalance = getBalanceAmount.innerText;

    //validate savings is more then balance
    if(parcentAmount > currentAmountOfBalance){
        alert("you can't save more then your remaining income");
    }
    else{
        //set the new amount to saving amount
        setElementValue('saved-amount' , parcentAmount);
    }

    //deduct the value and set
    const remainingBalance = currentAmountOfBalance - parcentAmount;
    setElementValue('final-amount' , remainingBalance);

})