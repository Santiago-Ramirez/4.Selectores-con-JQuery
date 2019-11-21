$(document).ready(function(){

  $("#pinta1").click(function(){
    $("div").css("background-color", "white");
    $(".cuadro1").css("background-color", "red");
  });

  $("#clean").click(function(){
		$("div").css("background-color", "white");
    alert("Se ha limpiado con exito");
	});


  $("#pinta2").click(function(){
    $("div").css("background-color", "white");
    $("#a,#b,#c,#d,#e").css("background-color", "red");
  });


$("#pinta3").click(function(){
  $("div").css("background-color", "white");
  $(".cuadro2").css("background-color", "red");
});


$("#lazeta").click(function(){
  $("div").css("background-color", "white");
  $(".cuadro1,.cuadro2,#a,#b,#c,#d,#e").css("background-color", "red");
});

$("#pinta5").click(function(){
  $("div").css("background-color", "white");
  $(".cuadro1,.cuadro2,#a,#b,#c,#d,#f,#g,#h,#i,#j,#k,#l,#m").css("background-color", "red");
});

$("#pinta6").click(function(){
  $("div").css("background-color", "white");
  $("div").css("background-color", "red");
  $(".alinearBTN,#white").css("background-color", "white");

});

});
