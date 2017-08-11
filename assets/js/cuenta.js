/*INDEX*/
$('#login').click(function(){
	document.location.href = "login.html";
})
$('#cuenta').click(function(){
	document.location.href = "cuenta.html";
})
/*FIN INDEX*/

/*LOGIN*/
$('#btn-sesion').click(function(){
	/*PONER VALIDACION DE DATOS*/
	var vali = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
	var inputmail = $('#mail').val();
	var clave = $('#pass').val();
	if (vali.test(inputmail)==false){
		$('.errormail').show();
	}else{
		$('.errormail').hide();
	}
	if(clave.length>8 || isNaN(clave)==true || clave==''){
		$('.errorpass').show();
	}else{
		$('.errorpass').hide();
	}
	if(vali.test(inputmail)==true && inputmail!=='' && clave.length<8 && isNaN(clave)==false & clave!==''){
		document.location.href= "movies.html";
	}
});
/*FIN LOGIN*/

/*CUENTA*/
$('.botoncuenta').click(function(){
	var vali = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
	var inputmail=$('#email').val();
if($('#name').val()=="" || $('#username').val()=="" || $('#email').val()=="" || $('#country').val()==""){
	$('.vacio').show();
}else if(vali.test(inputmail)==false){
	$('.vacio').hide();
	$('.error').show();
}else{
	$('.error').hide();
	var nombre = $('#name').val();	
	localStorage.setItem('name',nombre);
	var usuario = $('#username').val();
	localStorage.setItem('username',usuario);
	var correo = $('#email').val();
	localStorage.setItem('email',correo);
	var pais = $('#country').val();
	localStorage.setItem('country',pais);
	console.log(localStorage);
	document.location.href = "movies.html";
	/*
	localStorage.getItem('country')
	*/ //Para llamar los datos desde otro lado, se cambia por name, username, email y country
}
})
/*FIN CUENTA*/
