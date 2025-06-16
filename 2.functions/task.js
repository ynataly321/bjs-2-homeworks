function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  let avg = Number((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } 
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);    
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  } 
  return Math.max(...arr) - Math.min(...arr);  
}  

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  } 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }   
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  } 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }   
  }
  return sumEvenElement/countEvenElement;  
}  

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
    const intermediateResult = func(...arrOfArr[i]);
    if (intermediateResult > maxWorkerResult) {
      maxWorkerResult = intermediateResult;
    }
  }
  return maxWorkerResult;  
}
