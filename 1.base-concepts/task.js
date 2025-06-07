"use strict";
function solveEquation(a, b, c) {
  let discriminant = 0;
  discriminant = Math.pow(b, 2) - 4 * a * c;
  let arr = [];
  if (discriminant < 0) {
    arr = [];
  }
  else if (discriminant === 0) {
    arr = [-b/(2 * a)];
  }
  else {
    arr = [(-b + Math.sqrt(discriminant))/(2 * a), (-b - Math.sqrt(discriminant))/(2 * a)];
  }  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = 0;
  let loanBody = 0;
  let monthlyPayment = 0;
  let totalMortage = 0;
  monthlyPercent = percent/100/12;
  loanBody = amount - contribution;  
  monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / ((Math.pow((1 + monthlyPercent),countMonths)- 1))));
  totalMortage = Math.round((monthlyPayment * countMonths) * 100) / 100;  
  return totalMortage;   
}