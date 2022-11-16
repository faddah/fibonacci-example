"use strict";
exports.__esModule = true;
var fibWithoutRecursionButton = document.querySelector(".fibNoRecursionButton");
var fibWithoutRecursionTextArea = document.querySelector(".fibNoRecursionResult textarea");
var fibWithRecursionButton = document.querySelector(".fibRecursionButton");
var fibWithRecursionTextArea = document.querySelector(".fibRecursionResult textarea");
var clearButton = document.querySelector(".clearButton");
/*
let fibArr: number[] = [];
let fibRecurArr: number[] = [];
*/ var limit = 15;
// let sum: number, num1: number = 0, num2: number = 1;
var fibNoRecur = function(upperLimit) {
    var num1 = 0;
    var num2 = 1;
    var sequence = [
        num1,
        num2
    ];
    for(var i = 1; i < upperLimit - 1; i++){
        var sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        sequence.push(sum);
    }
    return sequence;
};
console.log(fibNoRecur(15));
/*
const showFibWithoutRecursion = (): void => {
    console.log(fibArr)
    fibArr.push(num1);
    fibArr.push(num2);
    console.log(fibArr)
    for (let i: number = 2; i <= limit; i++) {
        sum = num1 + num2;
        fibArr.push(sum);
        console.log(fibArr);
        num1 = num2;
        num2 = sum;
    }
    if (!fibWithoutRecursionTextArea.textContent) {
        fibWithoutRecursionTextArea.textContent = `Here is the Fibonacci sequence done without recursion:  ${fibArr.join(', ')}.`;
    }
}
*/ /*
const showFibSequence = (textAreaEl: Element, fibFunc: Function, recur: boolean): void => {
    const fibArr: number[] = fibFunc(limit);
    if (!textAreaEl.textContent) {
        textAreaEl.textContent = `Here is the Fibonacci sequence done with${recur ? `` : `out`} recursion:  ${fibArr.join(', ')}.`;
    }
}
*/ var showFibSequence = function(textAreaEl, fibFunc, recur) {
    var show = function() {
        var fibArr = fibFunc(limit);
        if (!textAreaEl.textContent) textAreaEl.textContent = "Here is the Fibonacci sequence done with".concat(recur ? "" : "out", " recursion:  ").concat(fibArr.join(", "), ".");
    };
    return show;
};
/*
const showFibWithoutRecursion = (): void => {
    const fibArr: number[] = fibNoRecur(limit);
    if (!fibWithoutRecursionTextArea.textContent) {
    fibWithoutRecursionTextArea.textContent = `Here is the Fibonacci sequence done without recursion:  ${fibArr.join(', ')}.`;
    }
}
*/ var fibRecur = function(n, memo) {
    if (memo === void 0) memo = [];
    if (n <= 2) return n;
    return fibRecur(n - 1, memo) + fibRecur(n - 2, memo);
};
var fibRecurSequence = function(upperLimit) {
    var mem1 = [];
    var sequence = [
        0,
        1
    ];
    for(var i = 1; i < upperLimit - 1; i++)sequence.push(fibRecur(i, mem1));
    return sequence;
};
console.log(fibRecurSequence(15));
/*
const showFibWithRecursion = (arr: number[]): void => {
    console.log(arr);
    arr.push(fibRecursion(limit, arr));
    console.log(arr);
    if (!fibWithRecursionTextArea.textContent) {
        fibWithRecursionTextArea.textContent = `Here is the Fibonacci sequence done with recursion:  ${arr.join(', ')}.`;
    }
}
*/ /*
const showFibWithRecursion = (): void => {
    let fibRecurArr: number[] = fibRecurSequence(limit);
    if (!fibWithRecursionTextArea.textContent) {
        fibWithRecursionTextArea.textContent = `Here is the Fibonacci sequence done with recursion:  ${fibRecurArr.join(', ')}.`;
    }
}
*/ var clearAll = function() {
    fibWithoutRecursionTextArea.textContent = "";
    fibWithRecursionTextArea.textContent = "";
// fibArr, fibRecurArr = [];
// num1, sum = 0;
// num2 = 1;
};
var withoutRecur = showFibSequence(fibWithoutRecursionTextArea, fibNoRecur, false);
var withRecur = showFibSequence(fibWithRecursionTextArea, fibRecurSequence, true);
fibWithoutRecursionButton.addEventListener("click", withoutRecur);
fibWithRecursionButton.addEventListener("click", withRecur);
clearButton.addEventListener("click", clearAll);

//# sourceMappingURL=index.f68744d1.js.map
