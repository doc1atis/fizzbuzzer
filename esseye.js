const inputed = 5;
let counter = 0;
while (counter < inputed) {
  counter++;

  if (counter % 3 === 0 || counter % 5 === 0) {
    if (counter % 3 === 0 && !counter % 5 === 0) {
      console.log("Fizz");
    } else if (counter % 5 === 0 && !counter % 3 === 0) {
      console.log("Buzz");
    } else if (counter % 5 === 0 && counter % 3 === 0) {
      console.log(FizzBuzz);
    }
  } else {
    console.log(counter);
  }
  // For each multiple of 5, print "Buzz" instead of the number.
  //For each multiple of 3, print "Fizz" instead of the number.
  // For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number
}

let counter = 0;
while (counter < numInput) {
  counter++;

  if (counter % 3 === 0 || counter % 5 === 0) {
    if (counter % 3 === 0 && !(counter % 5 === 0)) {
      printValue("Fizz");
    } else if (counter % 5 === 0 && !(counter % 3 === 0)) {
      printValue("Buzz");
    } else if (counter % 5 === 0 && counter % 3 === 0) {
      printValue("FizzBuzz");
    }
  } else {
    printValue(counter);
  }
}
