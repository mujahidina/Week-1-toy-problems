//  Propmt the user to enter their basic salary and benefits details.

let basicSalary = parseFloat(prompt("Enter your basic salary."));
let benefits = parseFloat(prompt('Enter your benefits amount.'));

// Here are the KRA rates i will be using.
let payeeRate =  0.3;
let nhifRate = 0.015;
let nssfRate = 0.06;

// And here i create variables on how to calculate the net salary.

let payee = basicSalary * payeeRate;
let nhifDeductions = basicSalary * nhifRate;
let nssfDeductions = basicSalary * nssfRate;
let grossSalary = basicSalary + benefits;
let netSalary = grossSalary - (payee + nssfDeductions + nhifDeductions);
 
//   The output that shows the individual's net salary.

document.write('Your net salary is  ' + netSalary);
