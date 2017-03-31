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
