let input_nombre = document.getElementById('nombre');
let input_correo = document.getElementById('email');
let input_rol = document.getElementById('rol');
let input_imagen = document.getElementById('image');

function cargar_datos_en_tarjeta(){
 let image = document.getElementById('imagen_perfil');
 let name = document.getElementById('cabecera');
 let puesto = document.getElementById('puesto');
 let email = document.getElementById('contacto');

 if(
  input_nombre.value &&
  input_correo &&
  input_imagen &&
  input_rol
 ){
  image.src = input_imagen.value;
  name.innerText = input_nombre.value;
  puesto.innerHTML = input_rol.value;
  email.innerText = input_correo.value;

 }else{
  alert('Faltan cargar datos!');
 }
 limpiar_form();

}

function limpiar_form(){
 input_nombre.value = '';
 input_correo.value = '';
 input_rol.value = '';
 input_imagen.value = '';
}




document.getElementById('btn-carga').addEventListener('click', cargar_datos_en_tarjeta);