$.getJSON('list.json', function(data) { 
    
  var random = data[Math.floor(Math.random()*data.length)];
  console.log(random.background-image);
  $("#list_strategies p").text(random.background-image);

  $.each(data, function(data) {
    $("body.random").css("background-image","url(" + this.image + ")");
  });
    
});

$('#list_strategies').click(function() {
  document.location.reload(true);
});
