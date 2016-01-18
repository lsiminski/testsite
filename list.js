$.getJSON('list.json', function(data) { 
    
  var randombackground-image = data.BGphotos[Math.floor(Math.random()*data.BGphotos.length)];
  console.log(randomBGphoto.background-image);

  $.each(data.BGphotos, function(data) {
    $("body.random").css("background-image","url(" + this.image + ")");
  });
    
});

$('#BGphotos_background-image').click(function() {
  document.location.reload(true);
});

