$(document).ready(function(){


//
//Objeto Jquery  y objetos tienen atributos y metodos
//objeto de Jquery .css


  $("#x").click(function(){

    $("div").css("background-color", "white");

    $(".cuadro1").css("background-color", "red");

  });
  $("#limpiar").click(function(){

		$("div").css("background-color", "white");

    alert("Se ha limpiado con exito");

	});

  $("#y").click(function(){

    $("div").css("background-color", "white");

    $("#h").css("background-color", "red");

  });

});
