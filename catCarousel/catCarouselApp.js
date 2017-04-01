// Cat carousel
// In this challenge, you need to write JavaScript that provides the following
// experience: when a user clicks on one of the thumbnail images, that image
// should be displayed in the full size image container at the top.
// your code here

let catImgToggle = () => {
    $('.thumbnail').on('click', function(event) {

        console.log($(event.currentTarget).find('img').attr('src'));
        let catSrc = $(event.currentTarget).find('img').attr('src');
        $('.hero img').attr('src', catSrc);
    });

};

$(catImgToggle());


// your code here
let catImgToggle = () => {
    $('.thumbnail').on('click', 'img', function(event) {
        //alert('it works');
        console.log($(this).attr('src'));
        let catSrc = $(this).attr('src');
        $('.hero img').attr('src', catSrc);
    });
};

$(catImgToggle());


// your code here
let catImgToggle = () => {
    $('.thumbnail').on('click', 'img', (event) => {
        //alert('it works');
        //console.log($(this).attr('src'));
        console.log($(event.currentTarget).attr('src'));
        let catSrc = $(event.currentTarget).attr('src');
        $('.hero img').attr('src', catSrc);
    });
};

$(catImgToggle());
