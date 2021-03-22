const arrayTable = [];

// const interest =  1 +  (0.036 / 12);

// let cap = 200_000;
let cap = 250_000;
const time = 25*12;
const increment = 1000;

const result = [{}]


// function calcInt(interest, cap, time, increment) {
//   for (let i = 0; i < time; i++) {

//     cap = (cap + increment) * interest;

//     arrayTable.push(cap);
//   }
//   console.table(arrayTable);
//   return cap
// }

// calcInt(interest, cap, time, increment)

const dividendQuarter = 0.036/4;

let interest;


// DRIP no so drip
function drip(interest, cap, time, increment) {
  let counter = 0
  for (let i = 0; i < time; i++) {

    if( i % 3 === 0) {
    counter++
      interest = cap * dividendQuarter;
      cap += interest
      console.log(cap, interest)
    }
  }
  return counter
}

drip(interest, cap, time, increment)