/* --------------Arrays---------------- */

/* Tarea 1 */

/* const year_months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const html_list = document.getElementById("month_list");

 year_months.forEach(function(element) {
    const list_item = document.createElement("li");
    list_item.textContent = element;
    html_list.appendChild(list_item);
  }); */




/* Tarea 2 */

/* let city = [];
let continuar = true;
do {
  city_user = prompt("Ingrese el nombre de una ciudad (vacío o Cancelar para terminar): ");
  
  if(city_user && city_user.trim() !== ""){
    city.push(city_user);
  }
} while(city_user !== null && city_user !== "");

 let city_show = '<div class="info">';
        city_show += '<h2>Arreglo de ciudades generado:</h2>';
        city_show += '<p><strong>Ciudades:</strong> [' + city.join(', ') + ']</p>';
        city_show += '</div>';

        city_show += '<div class="resultado">';
        city_show += '<p>Usted agrego ' + city.length + ' ciudades</p>';
        city_show += '</div>';

        city_show += '<div class="mostrar_ciudades">';
        city_show += '<h3>Posiciones específicas:</h3>';
        
        if(city.length > 0) {
            city_show += '<div class="ciudad-item"><strong>Primera posición:</strong> ' + city[0] + '</div>';
        }
        
        if(city.length >= 3) {
            city_show += '<div class="ciudad-item"><strong>Tercera posición:</strong> ' + city[2] + '</div>';
        }
        
        if(city.length > 0) {
            city_show += '<div class="ciudad-item"><strong>Última posición (índice ' + (city.length - 1) + '):</strong> ' + city[city.length - 1] + '</div>';
        }
        
        city_show += '</div>';
        city.push('París');
        city_show += '<div class="resultado">';
        city_show += '<p><strong>Se añadió "París" al final.</strong></p>';
        city_show += '<p><strong>Nuevo arreglo:</strong> [' + city.join(', ') + ']</p>';
        city_show += '</div>';
        city_show += '<div class="info">';
        if(city.length >= 2) {
            city_show += '<p><strong>Elemento en segunda posición:</strong> ' + city[1] + '</p>';
        } else {
            city_show += '<p><strong>No hay elemento en la segunda posición</strong></p>';
        }
        city_show += '</div>';
        if(city.length >= 2) {
            let ciudadAnterior = city[1];
            city[1] = 'Barcelona';
            city_show += '<div class="resultado">';
            city_show += '<p><strong>Se sustituyó "' + ciudadAnterior + '" por "Barcelona" en la segunda posición.</strong></p>';
            city_show += '<p><strong>Arreglo final:</strong> [' + city.join(', ') + ']</p>';
            city_show += '</div>';
        }
        document.getElementById("mostrar_ciudades").innerHTML = city_show; */






        /* Tarea 3 */


 /* let cantidad_apariciones = new Array(13).fill(0);

        function randomizador() {
            cantidad_apariciones = new Array(13).fill(0);
            
            for (let i = 0; i < 50; i++) {
                let dado1 = Math.floor(Math.random() * 6) + 1;
                let dado2 = Math.floor(Math.random() * 6) + 1;
                let suma = dado1 + dado2;
                cantidad_apariciones[suma]++;
            }
            
            show_results();
        }

        function show_results() {
            const table_body = document.getElementById('table_body');
            table_body.innerHTML = '';
            
            for (let i = 2; i <= 12; i++) {
                const row = document.createElement('tr');
                
                const suma_cell = document.createElement('td');
                suma_cell.textContent = i;
                
                const apariciones_cell = document.createElement('td');
                apariciones_cell.textContent = cantidad_apariciones[i];
                
                row.appendChild(suma_cell);
                row.appendChild(apariciones_cell);
                table_body.appendChild(row);
            }
        }
        randomizador(); */

    function numero_par_impar(numero) {
  if (numero % 2 === 0) {
    return "El número es par.";
  } else {
    return "El número es impar.";
  }
}
function numero_entrada(){

  let entrada = prompt("Ingrese un número entero:");
  
  
  if (entrada === null || entrada === "") {
    alert("No ingresaste ningún valor.");
  } 
  
  else if (isNaN(entrada)) {
    alert("Error: Debes ingresar un número válido.");
  } 
  
  else if (!Number.isInteger(Number(entrada))) {
    alert("Error: Debes ingresar un número entero (sin decimales).");
  } 
  
  else {
    let numero = Number(entrada);
    let resultado = numero_par_impar(numero);
    alert(resultado);
  }
}


function analizar_cadena(texto) {
  if (texto === texto.toUpperCase() && texto === texto.toLowerCase()) {
    return "La cadena no contiene letras.";
  } else if (texto === texto.toUpperCase()) {
    return "La cadena está formada solo por mayusculas.";
  } else if (texto === texto.toLowerCase()) {
    return "La cadena está formada solo por minúsculas.";
  } else {
    return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
  }
}
function text_chain(){

  let cadena_texto = prompt("Ingrese una cadena de texto:");
  
  if (cadena_texto === null || cadena_texto === "") {
    alert("No ingresaste ningún texto.");
  } else {
    let resultado = analizar_cadena(cadena_texto);
    alert(resultado);
  }
}


function calcularPerimetroRectangulo() {
  let lado1 = prompt("Ingrese el valor del primer lado del rectángulo: ");
  let lado2 = prompt("Ingrese el valor del segundo lado del rectángulo: ");
  
  if (lado1 === null || lado1 === "" || lado2 === null || lado2 === "") {
    alert("No ingresaste ningún valor.");
    return;
  }

  if (isNaN(lado1) || isNaN(lado2)) {
    alert("Error: Debes ingresar números válidos.");
    return;
  }

  lado1 = Number(lado1);
  lado2 = Number(lado2);

  if (!Number.isInteger(lado1) || !Number.isInteger(lado2)) {
    alert("Error: Debes ingresar números enteros (sin decimales).");
    return;
  }

  if (lado1 <= 0 || lado2 <= 0) {
    alert("Error: Los lados deben ser mayores a cero.");
    return;
  }

  let perimetro = 2 * (lado1 + lado2);
  alert(`El perímetro del rectángulo es: ${perimetro}`);
}

function crear_tabla_multiplicar(numero) {
    let tabla = "==============================\n";
    tabla += `Tabla de multiplicar del ${numero}\n`;
    tabla += "==============================\n\n";
    
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        tabla += `${numero} x ${i} = ${resultado}\n`;
    }
    
    tabla += "\n==============================";
    
    return tabla;
}

function resultado(){

  const entrada = prompt("Ingrese un número para ver su tabla de multiplicar:");
  
  const numero = parseInt(entrada);
  
  if (isNaN(numero)) {
      alert("Error: Por favor ingrese un número válido.");
  } else {
      const tabla = crear_tabla_multiplicar(numero);
      alert(tabla);
  }
}
resultado()