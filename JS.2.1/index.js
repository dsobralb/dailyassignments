
//------------------------
// Problem 1
//------------------------

let x = 30;
let y = 20;
let z = true;

if (x > y) {  // Changed < to >
  z = true;
} else {
  z = false;
}

//------------------------
// Problem 2
//------------------------

let a = "10% off!";
let b = "Love it!";
let c = true;

if (a !== b) {  // Changed === to !==
  c = true;
} else {
  c = false;
}

//------------------------
// Problem 3
//------------------------

let d = 5;
let e = 5;
let f = true;

if (d !== e) {  // Changed === to !==
  f = true;
} else {
  f = false;
}

//------------------------
// Problem 4
//------------------------

let g = 0;
let h = 50;
let i = 20;
let j = true;

if (g <= i) {  // Changed >= to <=
  if (i <= h) {  // Changed >= to <=
    j = true;
  } else {
    j = false;
  }
} else {
  j = false;
}

//------------------------
// Problem 5
//------------------------

let k = 1000;
let l = -12;
let m = "-12";
let n = true;

if (k < l) {  // Changed > to <
  n = true;
}
else if (l > k) {  // Changed < to >
  n = true;
}
else if (l !== m) {  // Changed == to !==
  n = true;
} else {
  n = false;
}

//------------------------
// Problem 6
//------------------------

let o = 20;
let p = 20;
let q = true;

if (o === p) {  // Changed !== to ===
  q = true;
} else {
  q = false;
}

//------------------------
// Problem 7
//------------------------

let r = 12 > 2 ? true : false;  // Changed < to >

//------------------------
// Problem 8
//------------------------

let s = "Hello!" !== "Hello!" ? true : false;  // Changed === to !==

//------------------------
// Problem 9
//------------------------

let t = 50 !== "50" ? true : false;  // Changed == to !==

//------------------------
// Problem 10
//------------------------

let u = 5 === 5 ? true : false;  // Changed !== to ===
