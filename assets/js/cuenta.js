/*INDEX*/
$('#login').click(function(){
	document.location.href = "login.html";
})
$('#cuenta').click(function(){
	document.location.href = "cuenta.html";
})
/*FIN INDEX*/

/*LOGIN*/

/*FIN LOGIN*/

/*CUENTA*/
$('.botoncuenta').click(function(){
	var nombre = $('#name').val();
	console.log(nombre);
	localStorage.setItem('name',nombre);
	var usuario = $('#username').val();
	console.log(usuario);
	localStorage.setItem('username',usuario);
	var correo = $('#mail').val();
	console.log(correo);
	localStorage.setItem('mail',correo);
	console.log(localStorage);
})
/*FIN CUENTA*/
