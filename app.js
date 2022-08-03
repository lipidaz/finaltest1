//1st
{
const A = +(prompt('Enter 1st number (lower): '));
const B = +(prompt('Enter 2nd number (higher): '));

for (let i = A; i <= B; i++) {
  let f = 0;
  for (let j = 2; j < i; j++) {
    if(i % j == 0) {
      f = 1;
      break;
    }
  }
  if(i > 1 && f == 0) {
    console.log(i);
  }
}
}

//2nd
{
let numberOneTriagle = (num) => {
  for (var i = 1; i <= num; i++) {
    var x = '';
    for (var j = 1; j <= i; j++) {
      x+= '*';
    }
  
    console.log(x);
  }
}
  
  numberOneTriagle(4);
}
