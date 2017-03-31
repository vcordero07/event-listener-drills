// your code here

let catImgToggle = () => {
    $('.thumbnail').on('click', function(event) {

        console.log($(event.currentTarget).find('img').attr('src'));
        let catSrc = $(event.currentTarget).find('img').attr('src');
        $('.hero img').attr('src', catSrc);
    });

};

$(catImgToggle());
