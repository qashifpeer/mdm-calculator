const primaryMeals = document.querySelectorAll(".primary-meals");
const middleMeals = document.querySelectorAll(".middle-meals");
const rate = document.querySelector("#rate");
const prevBalPrimaryRef = document.querySelector("#prev-bal-primary");
const prevBalMiddleRef= document.querySelector("#prev-bal-middle");
const incomePrimary = document.querySelector("#income-primary");
const incomeMiddle = document.querySelector("#income-middle");

const riceBalPrimary = document.querySelector("#prev-bal-rice-primary");
const riceBalMiddle = document.querySelector("#prev-bal-rice-middle");
const riceReceivedPrimary = document.querySelector("#rice-received-primary");
const riceReceivedMiddle = document.querySelector("#rice-received-middle");
const displayTotalPryMeals = document.querySelector("#display-total-pry-meals");
const displayTotalMiddleMeals = document.querySelector("#display-total-middle-meals");
const displayPryExpenditure= document.querySelector("#display-pry-expenditure");
const displayMiddleExpenditure= document.querySelector("#display-middle-expenditure");
const displayIncomePry = document.querySelector("#display-income-pry");
const displayIncomeMiddle = document.querySelector("#display-income-middle");
const displayObPrimary = document.querySelector("#display-ob-pry");
const displayObMiddle = document.querySelector("#display-ob-middle");


const btnSubmit = document.querySelector("#btn-submit");

let ratePrimary= 0;
let rateMiddle = 0;

let riceRatePrimary = 100;
let riceRateMiddle = 150;

var prevBalPrimary = prevBalPrimaryRef.value; 
// console.log(xxx);
var prevBalMiddle = prevBalMiddleRef.value;


function displayOpeningBalance(){

    // displayObPrimary.innerText = prevBalPrimary;
    // displayObMiddle.innerText = prevBalMiddle;
    // console.log(prevBalPrimary);



}
function displayIncome(){
    displayIncomePry.innerText = incomePrimary.value;
    displayIncomeMiddle.innerText = incomeMiddle.value;


}


function calculatePrimaryMeals(primaryMeals){
    let sum = 0;
    for(let i = 0; i < primaryMeals.length; i++){
        sum = sum + Number(primaryMeals[i].value);
    }
   return  sum;
    

}
function calculateMiddleMeals(middleMeals){
    let sum = 0;
    for(let i = 0; i < middleMeals.length; i++){
        sum = sum + Number(middleMeals[i].value);
    }
   return sum;

}
function checkRate(rate){
    if(rate.value == 2){
        ratePrimary = 4.97; //old rates
        rateMiddle = 7.45;

    }else if(rate.value == 1){
        ratePrimary = 5.45;  //new rates
        rateMiddle = 8.17;
    }
    return [ratePrimary,rateMiddle,rate];
    
}


function primaryExpenses(selectedRate,totalPrimaryMeals){
   
    let expenses = selectedRate[0]*totalPrimaryMeals;
    displayPryExpenditure.innerText =expenses;
}
function middleExpenses(selectedRate,totalMiddleMeals){
    let expenses = selectedRate[1]*totalMiddleMeals;
    displayMiddleExpenditure.innerText =expenses;
}

function displayMeals(totalPrimaryMeals,totalMiddleMeals){
    displayTotalPryMeals.innerText = totalPrimaryMeals;
    displayTotalMiddleMeals.innerText = totalMiddleMeals;
    
}
function balancePry(){

}




function calculateAll()
{
    let totalPrimaryMeals = calculatePrimaryMeals(primaryMeals);
    let totalMiddleMeals =  calculateMiddleMeals(middleMeals);
    var selectedRate = checkRate(rate);
    displayMeals(totalPrimaryMeals,totalMiddleMeals);
    primaryExpenses(selectedRate,totalPrimaryMeals);
    middleExpenses(selectedRate,totalMiddleMeals);
    displayOpeningBalance();
    displayIncome();
    console.log(prevBalMiddle);
    
    
    
   
}




btnSubmit.addEventListener("click", calculateAll);