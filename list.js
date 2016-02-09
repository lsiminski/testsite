$.getJSON('bg-images.json', function(data) { 
    
  var randomImage = data.bgImages[Math.floor(Math.random()*data.bgImages.length)];
  $("body").css('background-image', randomImage.src);
       
});
