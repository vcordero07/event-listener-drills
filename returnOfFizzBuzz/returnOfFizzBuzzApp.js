// Return of FizzBuzz
// In this challenge, you'll reimplement FizzBuzz. This time you'll create an
// event listener that listens for when a user submits a form indicating how
// high to count. This event should cause the program to create the FizzBuzz
// sequence up to the number requested by the user.
//
// For each element in the FizzBuzz sequence, your code should insert an element
// into the .js-results div that looks like this:
//
// <div class="fizz-buzz-item">
//   <span>1</span>
// </div>
// If the element's content is the word "fizz", the div with .fizz-buzz-item
// should also get the class .fizz applied. If the element's content is the
// word "buzz" it should get the class ".buzz" applied. And if its content is
// the word "fizzbuzz" it should get the class "fizzbuzz" applied.

// your code here
let strFizz = 'fizz';
let strBuzz = 'buzz';
let strFizzBuzz = 'fizzbuzz';

let getFizzBuzzVal = num => {
    let val = num;
    if (num % 15 === 0) {
        val = strFizzBuzz;
    } else if (num % 5 === 0) {
        val = strBuzz;
    } else if (num % 3 === 0) {
        val = strFizz;
    }
    return val;
};

let makeFizzBuzzArray = num => {
    let result = [];
    for (let i = 1; i <= num; i++) {
        result.push(getFizzBuzzVal(getFizzBuzzVal(i)));
    }
    return result;
};

let doFizzBuzz = num => {
    let arrFizzBuzz = makeFizzBuzzArray(num);
    arrFizzBuzz.forEach(function(item) {
        let newElem = $(
            '<div class="fizz-buzz-item"><span>' + item + '</span></div>');
        if (item === strFizz || item === strBuzz || item === strFizzBuzz) {
            newElem.addClass(item);
        }
        $(".js-results").append(newElem);
    })
};

let handleFormSubmit = () => {
    $('#number-chooser').submit(function(event) {
        event.preventDefault();
        // in case there's already results
        $(".js-results").empty();
        let choice = parseInt($(event.currentTarget).find(
            'input[name="number-choice"]').val());
        doFizzBuzz(choice);
    });
}

$(handleFormSubmit());

//------------------------------------
// your code here
let strFizz = 'fizz';
let strBuzz = 'buzz';
let strFizzBuzz = 'fizzbuzz';

let getFizzBuzzVal = num => {
    let val = num;
    if (num % 15 === 0) {
        val = strFizzBuzz;
    } else if (num % 5 === 0) {
        val = strBuzz;
    } else if (num % 3 === 0) {
        val = strFizz;
    }
    return val;
};

let makeFizzBuzzArray = num => {
    let result = [];
    //the counter start at 1, instead of 0 why?
    for (let i = 1; i <= num; i++) {
        //why this function was called twice in order to make a push?
        console.log('makeFizzBuzzArray: getFizzBuzzVal = ', getFizzBuzzVal(getFizzBuzzVal(i)));
        result.push(getFizzBuzzVal(getFizzBuzzVal(i)));
    }
    return result;
};

let doFizzBuzz = num => {
    let arrFizzBuzz = makeFizzBuzzArray(num);
    arrFizzBuzz.forEach(item => {
        let newElem = $(
            '<div class="fizz-buzz-item"><span>' + item + '</span></div>');
        if (item === strFizz || item === strBuzz || item === strFizzBuzz) {
            console.log('doFizzBuzz: ', newElem.addClass(item));
            newElem.addClass(item);
        }
        $(".js-results").append(newElem);
    })
};
let handleFormSubmit = () => {
    $('#number-chooser').submit(event => {

        //What is event.preventDefault()
        //Description: If this method is called, the default action of the event will not be triggered.
        event.preventDefault();

        $(".js-results").empty();

        console.log('handleFormSubmit - parseInt:', parseInt($(event.currentTarget).find('input[name="number-choice"]').val())); //equals 1
        let choice = parseInt($(event.currentTarget).find('input[name="number-choice"]').val());

        //this. is not working here. I'm guessing I would have to pass the input[] in an argument???
        //console.log('handleFormSubmit - this parseInt:', parseInt($(this).find('input[name="number-choice"]').val())); //equals NaN why
        //let choice = parseInt($(this).find('input[name="number-choice"]').val());

        doFizzBuzz(choice);
    });
}

$(handleFormSubmit());
