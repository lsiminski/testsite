/*
$.getJSON('list.json', function(data) { 

  $.each(data, function(data) {
	  if ( this.date === moda ) {
		  $("#list_name p").html("<a href='" + this.url + "' target=blank>" + this.name + "</a>");
		  $("#list_day p").text(this.day);
		  $("#list_category p").text(this.category);
		  $("body.random").css("background-image","url(" + this.image + ")");
	  } else {
	  }
  });
    
});
*/


$.getJSON('BGphotos.json', function(data) { 
    
  var randomBGphoto = data.BGphotos[Math.floor(Math.random()*data.BGphotos.length)];
  console.log(randomBGphoto.BGphoto);
  $("#BGphotos_BGphotos p").text(randomBGphoto.BGphoto);

  $.each(data.BGphotos, function(data) {
    $("body.random").css("background-image","url(" + this.image + ")");
  });
    
});

$('#BGphotos_BGphotos').click(function() {
  document.location.reload(true);
});

