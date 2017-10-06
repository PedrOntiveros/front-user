var iniciaApp = function(){
	//Hacer solicitud de los sistemas que hay con sus respectivos modulos, para poder llenar el combo
	//y los modulos usarlos para la sección de creación de perfiles.

	var muestraPerfiles = function(){
		$("#perfilesUser").show("slow");		
	}

	var muestraModulos = function(){
		$("#modulPerfiles").show("slow");
	}

	var json = 
	'{'+
		'"sistemas": {'+
	    	'"sis1": {'+
	      		'"modulos": "modulo1,modulo2,modulo3,modulo4",'+
	      		'"perfiles": {'+
	        		'"perfil1": "moulo2,modulo4"'+
	      		'}},'+
	    	'"sis3": {'+
	      		'"modulos": "modu1,modlu2,modlo3,modul4",'+
	      		'"perfiles": {'+
	        		'"perfil45": "modlu2,modlo3",'+
	        		'"dff": "modul90,modulo98"'+
	     '}}}}';

	var JsonSistema = JSON.parse(json);
	var option = "<option value='0'>Selecciona</option>";
	var indice = 1;
	for(var key in JsonSistema.sistemas){
		option += "<option value='"+(indice++)+"'>"+key+"</option><br>"
	}

	$("#comboSistU").html(option);
	$("#comboSistP").html(option);

	// JsonSistema.done(function(data){
	// 	var options "<option value='0'>Selecciona</option>";;
	// 		var indice = 1;
	// 		for(var key in data.sistemas){
	//			option += "<option value='"+(indice++)+"'>"+key+"</option><br>"
	// 		}
	// 		$("#comboSistU").html(options);
	//		$("#comboSistP").html(options);
	// 	});

	// JsonSistema.fail(function(jqError,textStatus){
	// });
	// //Que cambie de ventanas 
	// var loco = function(){
	// 	//obtener que boton fue seleccionado para que se muestre la pantalla 
	// 	console.log("cualqquier cosa");
	// }

	//Botones del Menu 
	$("#btnUsuario").on("click",function(){
		//Antes de mostrar el panel, hayq ue llenar el comboBox con los sistemas, 
		$("#secUsuario").show("slow");
		$("#secSistema").hide("slow");
		$("#secPerfil").hide("slow");
	});
	$("#btnSistema").on("click",function(){
		$("#secUsuario").hide("slow");
		$("#secSistema").show("slow");
		$("#secPerfil").hide("slow");
	});
	$("#btnPerfil").on("click",function(){
		$("#secUsuario").hide("slow");
		$("#secSistema").hide("slow");
		$("#secPerfil").show("slow");
	});
	$("#comboSistU").change(muestraPerfiles);
	$("#comboSistP").change(muestraModulos);
}

$(document).ready(iniciaApp);

