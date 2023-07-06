let testCase1 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 90,
    chemistry: 81,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 96,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 85,
    chemistry: 86,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

testCase1.sort((a, b) => {
  // Sort based on total marks
  if (a.biology + a.chemistry !== b.biology + b.chemistry) {
    return (b.biology + b.chemistry) - (a.biology + a.chemistry);
  }
  
  // Sort based on biology marks
  if (a.biology !== b.biology) {
    return b.biology - a.biology;
  }
  
  // Sort based on date of birth
  return new Date(a.dob) - new Date(b.dob);
});

console.log(testCase1);

let testCase2 = [
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 100,
    chemistry: 80,
  },
  {
    name: "Cristiano Ronaldo",
    dob: "31-05-1992",
    biology: 80,
    chemistry: 100,
  },
  {
    name: "Virat Kohli",
    dob: "31-12-1995",
    biology: 30,
    chemistry: 40,
  },
  {
    name: "Rohit Sharma",
    dob: "31-12-1995",
    biology: 40,
    chemistry: 30,
  },
  {
    name: "Viswanathan Anand",
    dob: "12-12-1994",
    biology: 99,
    chemistry: 10,
  },
];

testCase2.sort((a, b) => {
  // Sort based on total marks
  if (a.biology + a.chemistry !== b.biology + b.chemistry) {
    return (b.biology + b.chemistry) - (a.biology + a.chemistry);
  }
  
  // Sort based on biology marks
  if (a.biology !== b.biology) {
    return b.biology - a.biology;
  }
  
  // Sort based on date of birth
  return new Date(a.dob) - new Date(b.dob);
});

console.log(testCase2);
