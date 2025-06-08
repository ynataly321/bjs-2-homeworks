"use strict";
function solveEquation(a, b, c) {
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let arr = [];
  if (discriminant === 0) {
    arr = [-b/(2 * a)];
  } else if (discriminant > 0){
    arr = [(-b + Math.sqrt(discriminant))/(2 * a), (-b - Math.sqrt(discriminant))/(2 * a)];
  }  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalMortage = 0;
  let monthlyPercent = percent/100/12;
  let loanBody = amount - contribution;  
  let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / ((Math.pow((1 + monthlyPercent),countMonths)- 1))));
  return Math.round((monthlyPayment * countMonths) * 100) / 100;    
}