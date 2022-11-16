const fibWithoutRecursionButton: HTMLButtonElement = document.querySelector('.fibNoRecursionButton')!;
const fibWithoutRecursionTextArea: HTMLElement = document.querySelector('.fibNoRecursionResult textarea')!;
const fibWithRecursionButton: HTMLButtonElement = document.querySelector('.fibRecursionButton')!;
const fibWithRecursionTextArea: HTMLElement = document.querySelector('.fibRecursionResult textarea')!;
const clearButton: HTMLButtonElement = document.querySelector('.clearButton')!;

/*
let fibArr: number[] = [];
let fibRecurArr: number[] = [];
*/
const limit: number = 15;
// let sum: number, num1: number = 0, num2: number = 1;

const fibNoRecur = (upperLimit: number): number[] => {
	let num1: number = 0;
	let num2: number = 1;
	const sequence: number[] = [num1, num2]
	for (let i: number = 1; i < upperLimit - 1; i++) {
		const sum: number = num1 + num2;
		num1 = num2;
		num2 = sum;
		sequence.push(sum);
	}
	return sequence;
}
console.log(fibNoRecur(15))

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
*/

/*
const showFibSequence = (textAreaEl: Element, fibFunc: Function, recur: boolean): void => {
	const fibArr: number[] = fibFunc(limit);
	if (!textAreaEl.textContent) {
		textAreaEl.textContent = `Here is the Fibonacci sequence done with${recur ? `` : `out`} recursion:  ${fibArr.join(', ')}.`;
	}
}
*/

const showFibSequence = (textAreaEl: Element, fibFunc: Function, recur: boolean): EventListener => {
	const show = (): void => {
		const fibArr: number[] = fibFunc(limit);
		if (!textAreaEl.textContent) {
			textAreaEl.textContent = `Here is the Fibonacci sequence done with${recur ? `` : `out`} recursion:  ${fibArr.join(', ')}.`;
		}
	}
	return show;
}

/*
const showFibWithoutRecursion = (): void => {
	const fibArr: number[] = fibNoRecur(limit);
	if (!fibWithoutRecursionTextArea.textContent) {
	fibWithoutRecursionTextArea.textContent = `Here is the Fibonacci sequence done without recursion:  ${fibArr.join(', ')}.`;
	}
}
*/

const fibRecur = (n: number, memo: number[] = []): number => {
	if (n <= 2) return n;
	return fibRecur(n - 1, memo) + fibRecur(n - 2, memo);
}

const fibRecurSequence = (upperLimit: number): number[] => {
	let mem1: number[] = [];
	let sequence: number[] = [...[0, 1]];
	for (let i: number = 1; i < upperLimit - 1; i++) {
		sequence.push(fibRecur(i, mem1));
	}
	return sequence;
}
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
*/

/*
const showFibWithRecursion = (): void => {
	let fibRecurArr: number[] = fibRecurSequence(limit);
	if (!fibWithRecursionTextArea.textContent) {
		fibWithRecursionTextArea.textContent = `Here is the Fibonacci sequence done with recursion:  ${fibRecurArr.join(', ')}.`;
	}
}
*/

const clearAll = (): void => {
	fibWithoutRecursionTextArea.textContent = '';
	fibWithRecursionTextArea.textContent = '';
	// fibArr, fibRecurArr = [];
	// num1, sum = 0;
	// num2 = 1;
}

const withoutRecur = showFibSequence(fibWithoutRecursionTextArea, fibNoRecur, false);
const withRecur = showFibSequence(fibWithRecursionTextArea, fibRecurSequence, true);

fibWithoutRecursionButton.addEventListener('click', withoutRecur);
fibWithRecursionButton.addEventListener('click', withRecur);
clearButton.addEventListener('click', clearAll);