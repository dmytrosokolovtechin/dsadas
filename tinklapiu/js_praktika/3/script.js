function sumUntilNegative() {
  let sum = 0;
  while (true) {
    let input = parseFloat(prompt("Enter number:"));
    if (input < 0) break;
    if (input > 0) sum += input;
  }
  console.log("Sum of positive numbers:", sum);
}

sumUntilNegative(); 
