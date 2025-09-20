/* String */
/* Ejercicio 1 */
/* let apellido = prompt("Ingrese su apellido: ");
let caracteres = apellido.length;
let ultima_letra = apellido[apellido.length - 1];
console.log(caracteres)
console.log(ultima_letra) */




/* Ejercicio 2 */
/* let palabra_marmota = "marmota";
let marmota_to_upper_case = palabra_marmota.charAt(0).toUpperCase() + palabra_marmota.slice(1);
console.log(marmota_to_upper_case) */




/* Math */
/* let numero_random = 10.623413;
let numero_valor_bajo = Math.floor(numero_random);
let numero_fixeado = numero_random.toFixed(2);
let numero_elevado = Math.round(numero_random ** 3);
let numero_reducido = Math.round(Math.sqrt(numero_random));
let numero_multplicado = Math.round(numero_random * (Math.random() * (10 - 0) + 0));


console.log(numero_valor_bajo)
console.log(numero_fixeado)
console.log(numero_elevado)
console.log(numero_reducido)
console.log(numero_multplicado) */






/* Condicionales */

/* Ejercicio 1 
Pedirle el valor numerico al usuario, determinar si ese valor es mayor; igual o menor que 0 y devolverle al usuario el resultado
 */
/* let numero_solicitado = prompt("Ingrese un numero: ");
let valor_numerico = parseInt(numero_solicitado);
if(valor_numerico > 0){
 alert("El numero es positivo!")
}else if(valor_numerico < 0){
 alert("El numero es negativo!")
}else{
 alert("El numero es 0!")
} */




/* Ejercicio 2
Preguntarle al usuario su edad, si es mayor a 18 el programa simplemente lo deja pasar, si no preguntar si esta con un tutor para acompañarlo, si el usuario confirma puede pasar, si no esta con un tutor no puede pasar. 
*/
/* let edad_user = prompt("Ingrese su edad: ");
let edad_a_valor_num = parseInt(edad_user);
if (edad_a_valor_num >= 18){
 alert("Bienvenido a la fiesta!!🥳🥳");
}else{
 let tiene_tutor= confirm("Vienes con un tutor mayor de edad?");
 if (tiene_tutor){
  alert("Bienvenidos a la fiesta!!🥳🥳");
 }else{
  alert("Lo sentimos pero no puedes pasar😭😭");
 }
} */


/* Ejercicio 3
Preguntar al vendedor cual es el valor de la compra, determinar si esa compra lleva descuento y de cuanto es ese descuento, devolver el valor con el descuento aplicado dependiendo de cada caso
*/
let valor_compra = prompt("Ingrese el monto de la compra: ");
let valor_num_compra = parseInt(valor_compra);

if (valor_num_compra >= 100 && valor_num_compra < 300 ){
 alert(valor_num_compra - (valor_num_compra * 0.05))
}else if(valor_num_compra >= 300 && valor_num_compra < 500){
 alert(valor_num_compra - (valor_num_compra * 0.1))
}else if(valor_num_compra >= 500){
 alert(valor_num_compra - (valor_num_compra * 0.15))
}else{
 alert("Su compra es menor a 100 euros por ende no tiene descuento")
}

