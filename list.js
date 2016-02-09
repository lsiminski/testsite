$.getJSON('bg-images.json', function(data) { 
    
  var randomImage = data.bgImages[Math.floor(Math.random()*data.bgImages.length)];
  console.log(randomImage);
  $("body").css('background-image', randomImage.src);
       
});
