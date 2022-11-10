// ****************************************************************
// **** QASHIF PEER ******************* ********** *********
// **** File Description: MDM CALCULATOR
// ****
// **** Created on:  2022/11/06
// **** Author:   QASHIF PEER
// **** License:  **********
// **** Contact:  mail.qashifpeer@gmail.com

//Rate
const rate = document.querySelector("#rate");

// Upper Box
const prevBalPrimaryRef = document.querySelector("#prev-bal-primary");
const prevBalMiddleRef = document.querySelector("#prev-bal-middle");
const incomePrimary = document.querySelector("#income-primary");
const incomeMiddle = document.querySelector("#income-middle");

const riceObPrimaryRef = document.querySelector(
  "#previous-rice-balance-primary"
);
const riceObMiddleRef = document.querySelector("#previous-rice-balance-middle");
const riceReceivedPrimaryRef = document.querySelector("#rice-lifted-primary");
const riceReceivedMiddleRef = document.querySelector("#rice-lifted-middle");

// Input Days
const primaryMeals = document.querySelectorAll(".primary-meals");
const middleMeals = document.querySelectorAll(".middle-meals");

// DISPLAY Total Meals
const displayTotalPryMeals = document.querySelector("#display-total-pry-meals");
const displayTotalMiddleMeals = document.querySelector(
  "#display-total-middle-meals"
);

// DISPLAY PRIMARY SECTION
const displayObPrimary = document.querySelector("#display-ob-primary");
const displayIncomePry = document.querySelector("#display-income-pry");
const displayPryExpenditure = document.querySelector(
  "#display-expenditure-pry"
);
const displayPrimaryBalance = document.querySelector(
  "#display-balance-primary"
);

// DISPLAY MIDDLE SECTION
const displayObMiddle = document.querySelector("#display-ob-middle");
const displayIncomeMiddle = document.querySelector("#display-income-middle");
const displayMiddleExpenditure = document.querySelector(
  "#display-expenditure-middle"
);
const displayMiddleBalance = document.querySelector("#display-middle-balance");

// ACCUMULATIVE SECTION
const displayTotalOpeningBalance = document.querySelector(
  "#display-total-opening-balance"
);
const displayTotalIncome = document.querySelector("#display-total-income");
const displayTotalExpenditureRef = document.querySelector(
  "#display-total-expenditure"
);
const displayClosingBalanceRef = document.querySelector(
  "#display-closing-balance"
);

// RICE PRIMARY DETAILS
const displayRicePryOb = document.querySelector("#display-rice-ob-pry");
const displayRicePryLifted = document.querySelector("#display-rice-lifted-pry");
const displayRicePryConsumed = document.querySelector(
  "#display-rice-consumed-pry"
);
const displayRicePryBalance = document.querySelector("#display-rice-bal-pry");

// RICE MIDDLE DETAILS
const displayRiceMiddleOb = document.querySelector("#display-rice-middle-ob");
const displayRiceMiddleLifted = document.querySelector(
  "#display-rice-middle-lifted"
);
const displayRiceMiddleConsumed = document.querySelector(
  "#display-rice-middle-consumed"
);
const displayRiceMiddleBalance = document.querySelector(
  "#display-rice-middle-balance"
);

// ACCUMULATIVE RICE DETAILS
const displayRiceAccOb = document.querySelector("#display-rice-total-ob");
const displayRiceAccLifted = document.querySelector(
  "#display-rice-total-lifted"
);
const displayRiceAccConsumed = document.querySelector(
  "#display-rice-total-consumed"
);
const displayRiceAccCb = document.querySelector("#display-rice-total-cb");

const btnSubmit = document.querySelector("#btn-submit");

// ****************************************************************************************
//**********************  RATES   *********************************************************
let ratePrimary = 0;
let rateMiddle = 0;

let riceRatePrimary = 100;
let riceRateMiddle = 150;

// ****************************************************************************************

// opening balance primary and middle
function displayOpeningBalance(prevBalPrimaryRef, prevBalMiddleRef) {
  displayObPrimary.innerText = prevBalPrimaryRef;
  displayObMiddle.innerText = prevBalMiddleRef;

  return (totalBalance = Number(prevBalPrimaryRef) + Number(prevBalMiddleRef));
}

// pry + middle opening balance
function accumulativeOpeningBalance(totalOpeningBalance) {
  displayTotalOpeningBalance.innerText = totalOpeningBalance;
}

//display primary income and middle income
function displayIncome() {
  displayIncomePry.innerText = incomePrimary.value;
  displayIncomeMiddle.innerText = incomeMiddle.value;

  return (totalBalance =
    Number(incomePrimary.value) + Number(incomeMiddle.value));
}

//primary + middle income
function accumulativeIncome(totalIncome) {
  displayTotalIncome.innerText = totalIncome;
}

// total primary meals
function calculatePrimaryMeals(primaryMeals) {
  let sum = 0;
  for (let i = 0; i < primaryMeals.length; i++) {
    sum = sum + Number(primaryMeals[i].value);
  }
  return sum;
}

// total middle meals
function calculateMiddleMeals(middleMeals) {
  let sum = 0;
  for (let i = 0; i < middleMeals.length; i++) {
    sum = sum + Number(middleMeals[i].value);
  }
  return sum;
}

// calculates the old and rew rates
function checkRate(rate) {
  if (rate.value == 2) {
    ratePrimary = 4.97; //old rates
    rateMiddle = 7.45;
  } else if (rate.value == 1) {
    ratePrimary = 5.45; //new rates
    rateMiddle = 8.17;
  }
  return [ratePrimary, rateMiddle, rate];
}

// calculate primary expenditure
function calculatePrimaryExpenses(selectedRate, totalPrimaryMeals) {
  let expenses = selectedRate[0] * totalPrimaryMeals;
  return expenses;
}

// calculate middle expenditure
function calculateMiddleExpenses(selectedRate, totalMiddleMeals) {
  let expenses = selectedRate[1] * totalMiddleMeals;
  return expenses;
}

// primary = middle expenditure
function accumulativeExpenditure(primaryExpenses, middleExpenses) {
  total = primaryExpenses + middleExpenses;
  displayTotalExpenditureRef.innerText = total.toFixed(2);
  return total;
}

// displays total meals middle + pry
function displayMeals(totalPrimaryMeals, totalMiddleMeals) {
  displayTotalPryMeals.innerText = totalPrimaryMeals;
  displayTotalMiddleMeals.innerText = totalMiddleMeals;
}

// calculates the balance amount of primary
function calculatePrimaryBalance(
  prevBalPrimaryRef,
  incomePrimary,
  primaryExpenses
) {
  let primaryBalance =
    Number(prevBalPrimaryRef) + Number(incomePrimary) - primaryExpenses;
  displayPrimaryBalance.innerText = primaryBalance.toFixed(2);
  return primaryBalance;
}

// calculates the balance amount of middle
function calculateMiddleBalance(
  prevBalMiddleRef,
  incomeMiddle,
  middleExpenses
) {
  let middleBalance =
    Number(prevBalMiddleRef) + Number(incomeMiddle) - middleExpenses;
  displayMiddleBalance.innerText = middleBalance.toFixed(2);
  return middleBalance;
}

//sums the total closing balance
function accumulativeClosingBalance(
  totalOpeningBalance,
  totalIncome,
  totalExpenditure
) {
  let closingBal = totalOpeningBalance + totalIncome - totalExpenditure;
  displayClosingBalanceRef.innerText = Math.round(closingBal);
}

//  ********************************RICE CALCULATIONS*****************************************
// ************************************************************************************************

function displayRiceOpeningBal() {
  let riceLastBalPry = riceObPrimaryRef.value;
  displayRicePryOb.innerText = riceLastBalPry;

  let riceLastBalMiddle = riceObMiddleRef.value;
  displayRiceMiddleOb.innerText = riceLastBalMiddle;

  let riceLastBalTotal = Number(riceLastBalPry) + Number(riceLastBalMiddle);
  displayRiceAccOb.innerText = riceLastBalTotal;
  return [riceLastBalPry, riceLastBalMiddle, riceLastBalTotal];
}
function displayRiceTotalLifted() {
  let riceLiftedPry = riceReceivedPrimaryRef.value;
  displayRicePryLifted.innerText = riceLiftedPry;

  let riceLiftedMiddle = riceReceivedMiddleRef.value;
  displayRiceMiddleLifted.innerText = riceLiftedMiddle;

  let riceTotalLifted = Number(riceLiftedPry) + Number(riceLiftedMiddle);
  displayRiceAccLifted.innerText = riceTotalLifted;

  return [riceLiftedPry, riceLiftedMiddle, riceTotalLifted];
}

function displayRiceConsumed(pryMeals, middleMeals) {
  let pryRiceConsumed = (pryMeals * riceRatePrimary) / 1000;
  displayRicePryConsumed.innerText = pryRiceConsumed;

  let middleRiceConsumed = (middleMeals * riceRateMiddle) / 1000;
  displayRiceMiddleConsumed.innerHTML = middleRiceConsumed;

  let totalRiceConsumed = pryRiceConsumed + middleRiceConsumed;
  displayRiceAccConsumed.innerText = totalRiceConsumed.toFixed(3);

  return [pryRiceConsumed, middleRiceConsumed, totalRiceConsumed];
}

function displayRiceBalance(riceOpeningBalance, riceLifted, riceConsumed) {
  let pryRiceBalance =
    Number(riceOpeningBalance[0]) +
    Number(riceLifted[0]) -
    Number(riceConsumed[0]);
  displayRicePryBalance.innerText = pryRiceBalance.toFixed(3);

  let middleRiceBalance =
    Number(riceOpeningBalance[1]) +
    Number(riceLifted[1]) -
    Number(riceConsumed[1]);
  displayRiceMiddleBalance.innerText = middleRiceBalance.toFixed(3);

  let closingBalance = pryRiceBalance + middleRiceBalance;
  displayRiceAccCb.innerText = closingBalance.toFixed(3);
}

function calculateAll() {
  let totalPrimaryMeals = calculatePrimaryMeals(primaryMeals);
  let totalMiddleMeals = calculateMiddleMeals(middleMeals);
  var selectedRate = checkRate(rate);

  displayMeals(totalPrimaryMeals, totalMiddleMeals);

  let primaryExpenses = calculatePrimaryExpenses(
    selectedRate,
    totalPrimaryMeals
  );

  displayPryExpenditure.innerText = primaryExpenses.toFixed(2);
  let middleExpenses = calculateMiddleExpenses(selectedRate, totalMiddleMeals);
  displayMiddleExpenditure.innerText = middleExpenses.toFixed(2);

  let totalOpeningBalance = displayOpeningBalance(
    prevBalPrimaryRef.value,
    prevBalMiddleRef.value
  );
  let totalIncome = displayIncome();
  let primaryBalance = calculatePrimaryBalance(
    prevBalPrimaryRef.value,
    incomePrimary.value,
    primaryExpenses
  );
  let middleBalance = calculateMiddleBalance(
    prevBalMiddleRef.value,
    incomeMiddle.value,
    middleExpenses
  );
  // Total balance
  accumulativeOpeningBalance(totalOpeningBalance);
  //Total Income
  accumulativeIncome(totalIncome);
  // Total expenditure
  let totalExpenditure = accumulativeExpenditure(
    primaryExpenses,
    middleExpenses
  );
  // Closing Balance
  accumulativeClosingBalance(
    totalOpeningBalance,
    totalIncome,
    totalExpenditure
  );

  // ********************************RICE DETAILS ********************************
  let riceOpeningBalance = displayRiceOpeningBal();
  let riceLifted = displayRiceTotalLifted();
  let riceConsumed = displayRiceConsumed(totalPrimaryMeals, totalMiddleMeals);
  displayRiceBalance(riceOpeningBalance, riceLifted, riceConsumed);
}

btnSubmit.addEventListener("click", calculateAll);
