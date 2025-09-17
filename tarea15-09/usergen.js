let nombre, apellido, random_number, nombre_usuario, nombre_a;
nombre = prompt("Ingrese su nombre: ");
apellido = prompt("Ingrese su apellido: ");
random_number = Math.floor(Math.random() * (100 - 0) + 0);
nombre_a = nombre[0]
nombre_usuario = nombre_a + apellido + random_number;
alert(nombre_usuario);