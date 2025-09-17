let nombre, edad, es_estudiante, materias_favoritas, info_contacto;
const numero_de_objetos = 3;
nombre = prompt("Ingrese su nombre: ");
do {
 edad = prompt("Por favor ingrese su edad:");
} while (isNaN(Number(edad)) || edad.trim() === "");

es_estudiante = confirm("Es usted estudiante?") ;



materias_favoritas = [];


for (let i = 0; i < numero_de_objetos; i++) {
  let userInput = prompt(`Ingrese su materia favorita ${i + 1}:`);
  materias_favoritas.push(userInput);
}

info_contacto = {
 correo : prompt("Ingrese su correo electronico:"),
 numero_telefonico : prompt("Ingrese su numero telefonico"),
}

console.log(nombre)
console.log(edad)
console.log(es_estudiante)
console.log(materias_favoritas)
console.log(info_contacto)