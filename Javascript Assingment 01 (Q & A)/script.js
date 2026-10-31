// ==========================================
// SMIT Batch 22 - JavaScript Assignment 01
// ==========================================

// ------------------------------------------
// Question 1: Personal Information[cite: 1]
// ------------------------------------------
var myName = "Ahmed";
var myAge = 19;
var myCity = "Karachi";
var course = "Web & Mobile App Development";
var institute = "SMIT";

console.log("=== Question 1: Personal Information ===");
console.log(`My name is ${myName}.`);
console.log(`I am ${myAge} years old.`);
console.log(`I live in ${myCity}.`);
console.log(`I am learning ${course}.`);
console.log(`My institute is ${institute}.`);


// ------------------------------------------
// Question 2: Variable Declaration[cite: 2]
// ------------------------------------------
var favLang = "JavaScript";
let topic = "Fundamentals";
const batch = 22;

console.log("\n=== Question 2: Variable Declaration ===");
console.log(`Favorite Language: ${favLang}`);
console.log(`Current Topic: ${topic}`);
console.log(`Batch Number: ${batch}`);


// ------------------------------------------
// Question 3: Data Types[cite: 2]
// ------------------------------------------
var str = "Hello SMIT";
var num = 100;
var isTrue = true;
var notDefined;
var emptyVal = null;

console.log("\n=== Question 3: Data Types ===");
console.log(`Type of str: ${typeof str}`);
console.log(`Type of num: ${typeof num}`);
console.log(`Type of isTrue: ${typeof isTrue}`);
console.log(`Type of notDefined: ${typeof notDefined}`);
console.log(`Type of emptyVal: ${typeof emptyVal}`);


// ------------------------------------------
// Question 4: Legal and Illegal Variables[cite: 2]
// ------------------------------------------
var studentName = "Ali";      // Corrected: Removed space
var firstStudent = "Bilal";   // Corrected: Cannot start with number
var _totalMarks = 500;        // Valid
var myNameVar = "Ahmed";      // Corrected: Removed hyphen
var $price = 250;             // Valid
var classi = "Batch22";       // Valid
var userAge = 20;             // Valid
var firstName = "Umer";       // Corrected: Removed space
var total_amount = 1500;      // Valid
var letValue = "test";        // Corrected: Avoided keyword 'let'

console.log("\n=== Question 4: Legal and Illegal Variables ===");
console.log("All variable names corrected successfully!");


// ------------------------------------------
// Question 5: Basic Calculator[cite: 2]
// ------------------------------------------
console.log("\n=== Question 5: Basic Calculator ===");
var num1 = Number(prompt("Q5 - Enter First Number:", "20")) || 20;
var num2 = Number(prompt("Q5 - Enter Second Number:", "6")) || 6;

console.log(`Addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num1 / num2}`);
console.log(`Modulus: ${num1 % num2}`);


// ------------------------------------------
// Question 6: Shopping Bill[cite: 3]
// ------------------------------------------
console.log("\n=== Question 6: Shopping Bill ===");
var item1 = Number(prompt("Q6 - Enter price of Product 1:", "1200")) || 1200;
var item2 = Number(prompt("Q6 - Enter price of Product 2:", "800")) || 800;
var item3 = Number(prompt("Q6 - Enter price of Product 3:", "500")) || 500;

var total = item1 + item2 + item3;
var discount = total * 0.10;
var finalAmount = total - discount;

console.log(`Total Bill: Rs. ${total}`);
console.log(`Discount: Rs. ${discount}`);
console.log(`Final Bill: Rs. ${finalAmount}`);


// ------------------------------------------
// Question 7: Mathematical Expression[cite: 3]
// ------------------------------------------
console.log("\n=== Question 7: Mathematical Expressions ===");
var a = 10 + 5 * 2;
console.log(`A = ${a}`);

var b = (10 + 5) * 2;
console.log(`B = ${b}`);

var c = 20 / 2 + 3 * 4 - 5;
console.log(`C = ${c}`);

var d = 5 + 2 * (8 - 3) / 5;
console.log(`D = ${d}`);

var e = 30 % 4 + 6 * 2;
console.log(`E = ${e}`);


// ------------------------------------------
// Question 8: Welcome Message[cite: 3]
// ------------------------------------------
console.log("\n=== Question 8: Welcome Message ===");
var fName = prompt("Q8 - Enter First Name:", "Ali") || "Ali";
var lName = prompt("Q8 - Enter Last Name:", "Khan") || "Khan";
var userCity = prompt("Q8 - Enter City:", "Karachi") || "Karachi";

console.log(`Welcome ${fName} ${lName}!\nYou are from ${userCity}.`);


// ------------------------------------------
// Question 9: Age Calculator[cite: 4]
// ------------------------------------------
console.log("\n=== Question 9: Age Calculator ===");
var birthYear = Number(prompt("Q9 - Enter Birth Year:", "2005")) || 2005;
var currentYear = 2026;
var userAgeCalc = currentYear - birthYear;

console.log(`Your approximate age is ${userAgeCalc} years.`);


// ------------------------------------------
// Question 10: Marks Percentage Calculator[cite: 4]
// ------------------------------------------
console.log("\n=== Question 10: Marks Percentage Calculator ===");
var sub1 = Number(prompt("Q10 - Enter English marks:", "80")) || 80;
var sub2 = Number(prompt("Q10 - Enter Math marks:", "90")) || 90;
var sub3 = Number(prompt("Q10 - Enter Science marks:", "75")) || 75;
var sub4 = Number(prompt("Q10 - Enter Computer marks:", "95")) || 95;
var sub5 = Number(prompt("Q10 - Enter Urdu marks:", "85")) || 85;

var obtained = sub1 + sub2 + sub3 + sub4 + sub5;
var totalMaxMarks = 500;
var per = (obtained / totalMaxMarks) * 100;

console.log(`Obtained Marks: ${obtained}`);
console.log(`Total Marks: ${totalMaxMarks}`);
console.log(`Percentage: ${per}%`);


// ------------------------------------------
// Question 11: Currency Converter[cite: 4]
// ------------------------------------------
console.log("\n=== Question 11: Currency Converter ===");
var pkrAmount = Number(prompt("Q11 - Enter PKR amount:", "5600")) || 5600;
var usdRate = 280;
var convertedUsd = pkrAmount / usdRate;

console.log(`Equivalent USD: $${convertedUsd}`);


// ------------------------------------------
// Question 12: Salary Calculator[cite: 5]
// ------------------------------------------
console.log("\n=== Question 12: Salary Calculator ===");
var basic = Number(prompt("Q12 - Enter Basic Salary:", "50000")) || 50000;

var houseAlloc = basic * 0.20;
var medAlloc = basic * 0.10;
var tax = basic * 0.05;
var gross = basic + houseAlloc + medAlloc;
var net = gross - tax;

console.log(`Basic Salary: Rs. ${basic}`);
console.log(`House Allowance: Rs. ${houseAlloc}`);
console.log(`Medical Allowance: Rs. ${medAlloc}`);
console.log(`Gross Salary: Rs. ${gross}`);
console.log(`Tax Deduction: Rs. ${tax}`);
console.log(`Net Salary: Rs. ${net}`);