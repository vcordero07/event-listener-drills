let handleBulbClicks = () => {
    $('.lightbulb').click(function(event) {
        $('.lightbulb').removeClass('bulb-on');
        $(event.currentTarget).addClass('bulb-on')
    });
};

$(handleBulbClicks());
