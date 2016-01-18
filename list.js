$.getJSON('list.json', function(data) { 
    
  var randomStrategy = data.strategies[Math.floor(Math.random()*data.strategies.length)];
  console.log(randomStrategy.strategy);
  $("#list_strategies p").text(randomStrategy.strategy);

  $.each(data, function(data) {
    $("body.random").css("background-image","url(" + this.image + ")");
  });
    
});

$('#list_strategies').click(function() {
  document.location.reload(true);
});
