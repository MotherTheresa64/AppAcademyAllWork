/*You are working on a counter function. Everytime the function is called, it should add 1 to the counter, and then print out the counter's current value. Your goal is to analyze two possible solutions, and then debug the function so it produces the correct output.

Example 1: Predict what will be printed when `incrementCounter1()` is called. What will happen when `incrementCounter1()` is called 3 times in a row?

Run the code on the "Your Code" tab and compare the output to your prediction.

Example 2: Your friend tried to debug this code, and came up with the second solution. Predict what will be printed when `incrementCounter2()` is called. What will happen when `incrementCounter2()` is called 3 times in a row?

Comment out the `console.log()`s for example 1 and uncomment the `console.log()`s for example 2. Run the code and compare the output to your prediction.

Use what you know about about scope (local, global, and block) to debug the `incrementCounter2()` function.

Run the function again. If successful, you should see the counter print out 1, 2, 3...incrementing the counter by 1 with each additional function call.*/

let counter1 = 0;

function incrementCounter1() {
    counter1 += 1;
    console.log(counter1);
}

incrementCounter1(); // Prints 1
console.log(`First counter value:  ${counter1}`) // Prints 1

/*-------------------------------------------*/

let counter2 = 0;

function incrementCounter2() {
    counter2 += 1;
    console.log(counter2);
}

incrementCounter2(); // Prints 1
console.log(`First counter value:  ${counter2}`) // Prints 1
