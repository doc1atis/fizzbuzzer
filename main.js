// Find the submit button on our page.
const submitButton = document.querySelector(".submit");
//When it's clicked, launch `fizzBuzz`.
submitButton.onclick = fizzBuzz;

function fizzBuzz(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

  /*
    TODO: Call the function `clearList`, which we have defined for you. You
    don't need to put anything in the parentheses to tell it what to clear, just
    call it--it knows what to do!
  */
  clearList();

  // TODO: Find the input box the user is typing in and put it in a variable.
  const userInput = document.querySelector("#input");
  // TODO: Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Make sure it's a
  // number, not a string. Save it to a variable.
  const numInput = Number(userInput.value);

  /*
    TODO: Print out the Fizzbuzz pattern up to that input.
    Use the pre-defined `printValue` function below to print out each line,
    giving it the value you want to print.

    
    Essentially, you can use `printValue` the same way you would `console.log`,
    only it will write to the DOM instead of to the console.
    
    You can write your `while` loop however you want, but you MUST write it
    yourself for your own better comprehension. No copy-pasting, please!

    As a stretch goal (wait until you've finished the basic FizzBuzz solution!),
    call `printValueStrong` instead of `printValue` for even-numbered items.
  */

  // For each multiple of 5, print "Buzz" instead of the number.
  //For each multiple of 3, print "Fizz" instead of the number.
  // For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number

  let counter = 0;
  while (counter < numInput) {
    counter++;

    if (counter % 5 === 0 && counter % 3 === 0) {
      printValue("FizzBuzz");
    } else if (counter % 3 === 0) {
      printValue("Fizz");
    } else if (counter % 5 === 0) {
      printValue("Buzz");
    } else {
      printValue(counter);
    }
  }
}
/*
    Stretch goal TODO:
    Using the variable we saved above for the input box, clear its value.
    
    You might have to do a small bit of research for this, though you should be
    able to figure it out based on the fact that we can assign values to properties,
    just as we can to variables.

    This is a very useful feature, as it's an annoying and unexpected user
    experience to ask them to delete anything they've inputted previously before
    inputting something else.
  */

function printValue(value) {
  // Create a list item.
  const listItem = document.createElement("li");
  // Put its value as its contents.
  listItem.innerText = value;

  /*
    Stretch goal TODO:
    Before we append it to the list, let's style this list item.
    Give it the following (easy but not particularly good) CSS, using properties
    on [element].style. See `printValueStrong` below for a couple examples.

    Although I'm using CSS to demonstrate what we want, note that we want you to
    use JavaScript for this. Also note that there's no kebab case in JavaScript!

    li {
      font-size: 2em;
      color: blue;
      margin-top: 5px;
    }
    
    If you want to set the values of these properties to something else, feel
    free!
  */

  // Find the unordered list we've made into a results console.
  const list = document.querySelector(".list");
  // Append our list item to it.
  list.appendChild(listItem);
}

function printValueStrong(value) {
  // Create a list item.
  const listItem = document.createElement("li");
  // Put the uppercased value as its contents and make it bold.
  listItem.innerText = value.toString().toUpperCase();
  listItem.style.fontWeight = "bold";

  // Stretch goal TODO: copy and paste the styling code from `printValue` here.
  // Otherwise we'll only get the styling on half the items!

  // Find the unordered list we've made into a results console.
  const list = document.querySelector(".list");
  // Append our list item to it.
  list.appendChild(listItem);
}

function clearList() {
  // Find the unordered list we've made into a results console.
  const list = document.querySelector(".list");

  // Remove its list items.
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}
