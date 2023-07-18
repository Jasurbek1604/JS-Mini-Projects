//!fibonacci

// let a = 0,
//   b = 1,
//   c;

// for (let i = 0; i < 10; i++) {
//   console.log(a);
//   c = a + b;
//   a = b;
//   b = c;
// }

//!sum

let sum = (a) => {
  return (b) => {
    if (b) return sum(a + b);
    return a;
  };
};

// console.log(sum(10)(20)());

//!recursion function

let company = {
  sales: [
    { name: "john", salary: 1000 },
    { name: "john", salary: 1000 },
  ],
  devolopment: {
    sites: [
      { name: "none", salary: 1000 },
      { name: "none", salary: 1000 },
    ],
    dev: [
      { name: "none", salary: 1000 },
      { name: "none", salary: 1000 },
    ],
  },
};

const recursion = (company) => {
  if (Array.isArray(company)) {
    return company.reduce((a, b) => (a += b.salary), 0);
  } else {
    let sum = 0;
    let arr = Object.values(company);
    for (let i of arr) {
      sum += recursion(i);
    }
    return sum;
  }
};

// console.log(recursion(company));

//!generator function

// function* generator() {
//   let i = 1,
//     a = 0;
//   while (1) {
//     a += yield i++;
//     console.log(a);
//   }
// }

// let gen = generator();

// gen.next(100);
// gen.next(5);
// gen.next(9);
// console.log(gen.next(20));

//!cache

const getData = () => {
  fetch("url").then((res) => res.json());
};

const getCached = (func) => {
  let map = new Map();
  return function (x) {
    if (map.has(x)) {
      return map.get(x);
    }
    let res = func();
    return map.set(x, res);
  };
};

getCached = getCached(getData);

getCached();
