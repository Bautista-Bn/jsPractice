// Calculadora básica en JavaScript
function calculadora() {
    // Pedir el primer número
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    
    // Validar que sea un número válido
    while (isNaN(num1)) {
        num1 = parseFloat(prompt("Por favor, ingresa un número válido:"));
    }
    
    // Pedir el segundo número
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    
    // Validar que sea un número válido
    while (isNaN(num2)) {
        num2 = parseFloat(prompt("Por favor, ingresa un número válido:"));
    }
    
    // Mostrar menú de operadores
    let operadores = `Selecciona una operación:
1. Suma (+)
2. Resta (-)
3. Multiplicación (*)
4. División (/)
5. Módulo (%)`;
    
    let opcion = prompt(operadores);
    
    let resultado;
    let operador;
    
    // Realizar la operación según la opción seleccionada
    switch (opcion) {
        case "1":
            resultado = num1 + num2;
            operador = "+";
            break;
        case "2":
            resultado = num1 - num2;
            operador = "-";
            break;
        case "3":
            resultado = num1 * num2;
            operador = "*";
            break;
        case "4":
            if (num2 === 0) {
                alert("Error: No se puede dividir por cero");
                return;
            }
            resultado = num1 / num2;
            operador = "/";
            break;
        case "5":
            if (num2 === 0) {
                alert("Error: No se puede calcular el módulo con cero");
                return;
            }
            resultado = num1 % num2;
            operador = "%";
            break;
        default:
            alert("Opción no válida");
            return;
    }
    
    // Mostrar el resultado
    alert(`Resultado: ${num1} ${operador} ${num2} = ${resultado}`);
    
    // Preguntar si quiere hacer otra operación
    let continuar = confirm("¿Deseas realizar otra operación?");
    if (continuar) {
        calculadora();
    }
}

// Iniciar la calculadora
calculadora();