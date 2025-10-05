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


 let cantidad_apariciones = new Array(13).fill(0);

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
        randomizador();