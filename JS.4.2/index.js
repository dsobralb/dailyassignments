// Problem 1
// Create a string in myCurrency using values from the currency object.

let currency = {
  usd: '$',
  euro: '€',
  yen: '¥'
};

let myCurrency = `I have ${currency.euro}200 which is ${currency.yen}23,718.09 and ${currency.usd}218.84`;
console.log(myCurrency);


// Problem 2
// Add the monthly incomes and update totalIncome in the companyIncome object.

let companyIncome = {
  january: 987423,
  february: 932482,
  march: 3249834,
  totalIncome: 4357346
};

let total = companyIncome.january + companyIncome.february + companyIncome.march;
companyIncome.totalIncome = total;
console.log(companyIncome);


// Problem 3
// Add the number of students in each class together.

let college = {
  students: 23432,
  classOf21: {
    students: 8134,
    averageTuition: 28563
  },
  classOf22: {
    students: 10238,
    averageTuition: 22759
  },
  graduationRatePercent: 70 
};

let students = college.classOf21.students + college.classOf22.students;
console.log(students);


// Problem 4
// Use the pow4 function and addThree function from the mathEquations object.

let mathEquations = {
  addTwo: function(a, b) {
    return a + b;
  },
  addThree: function(a, b, c) {
    return a + b + c;
  },
  pow4: function(num) {
    return num * num * num * num;
  }
};

let first = mathEquations.pow4(7);  // 7 to the power of 4
let second = mathEquations.addThree(3213, 3543, 12365);  // Sum of three numbers
console.log(first);
console.log(second);


// Problem 5
// Use the positiveExponent function with base 5 and power 3.

let mathInfo = {
  exponent: 'a quantity representing the power to which a given number or expression is to be raised, usually expressed as a raised symbol beside the number or expression',
  logarithm: 'a quantity representing the power to which a fixed number (the base) must be raised to produce a given number.',
  equation: {
    positiveExponent: function(base, power) {
      let total = base;
      for(let i = 1; i < power; i++) {
        total *= base;
      }
      return total;
    }
  }
};

let answer = mathInfo.equation.positiveExponent(5, 3);  // 5 to the power of 3
console.log(answer);
