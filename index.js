const interest =  1 +  (0.05 / 12);

let cap = 160_000;
const time = 240;
const increment = 1_000;

function calcInt(interest, cap, time, increment) {
  for (let i = 0; i < time; i++) {

    cap = (cap + increment) * interest
    console.log('cap: ', cap);
  }
  return cap
}

calcInt(interest, cap, time, increment)