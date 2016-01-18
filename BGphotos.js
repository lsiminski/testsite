$.getJSON('BGphotos.json', function(data) { 
    
  var randomBGphoto = data.BGphotos[Math.floor(Math.random()*data.BGphotos.length)];
  console.log(randomBGphoto.BGphoto);

  $.each(data.BGphotos, function(data) {
    $("body.random").css("background-image","url(" + this.image + ")");
  });
    
});

$('#BGphotos_BGphotos').click(function() {
  document.location.reload(true);
});

