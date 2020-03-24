function handleCatImg(){
  $('.thumbnail').on('click', function(event) {
    const targetCat = $(event.currentTarget).find('img').attr('src');
    const targetAlt = $(event.currentTarget).find('img').attr('alt');

$('.hero img').attr('src', targetCat).attr('alt', targetAlt);
});
}

$(handleCatImg);
// JavaScript Document