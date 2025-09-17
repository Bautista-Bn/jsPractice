let edad, tiene_licencia, es_mayor;
edad = prompt("Ingrese su edad: ");
tiene_licencia = confirm("Usted tiene licencia? ");
es_mayor = edad >= 18; 
if (es_mayor && tiene_licencia){
 alert("Usted puede circular.")
}else{
 alert("Usted no puede circular.")
}