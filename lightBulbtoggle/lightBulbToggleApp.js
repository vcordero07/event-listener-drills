// Lightbulb Toggle
// In this drill, you'll need to use event listeners to detect when users click
// on an element with the .js-lightbulb class. When that happens, the current
// clicked element should get the class .bulb-on applied to it, and any other
// elements that previously had the .bulb-on class should have it removed.
//
// With the CSS styles already in place, this will cause the currently clicked
// lightbulb to appear to turn on, and any other lit bulbs off.

let handleBulbClicks = () => {
    $('.lightbulb').click(function(event) {
        $('.lightbulb').removeClass('bulb-on');
        $(event.currentTarget).addClass('bulb-on')
    });
};

$(handleBulbClicks());



//----------------------
// your code here

let lightBulbToggle = () => {
    $('.lightbulb').click(function(event) {
        $('.lightbulb').removeClass('bulb-on');
        //console.log( $(this).addClass('bulb-on'));
        $(this).addClass('bulb-on')
    });
};

$(lightBulbToggle());
