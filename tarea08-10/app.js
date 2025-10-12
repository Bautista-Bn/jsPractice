// Variables globales
let current_value = '0';
let previous_value = '';
let operation = null;
let should_reset_display = false;

const display = document.getElementById('display');

// Función para actualizar el display
function update_display() {
  display.value = current_value;
}

// Función para limpiar
function clear_calculator() {
  current_value = '0';
  previous_value = '';
  operation = null;
  should_reset_display = false;
  update_display();
}

// Función para agregar número
function append_number(number) {
  if (should_reset_display) {
    current_value = '';
    should_reset_display = false;
  }
  
  if (current_value === '0' && number !== '.') {
    current_value = number;
  } else if (number === '.' && current_value.includes('.')) {
    return;
  } else {
    current_value += number;
  }
  
  update_display();
}

// Función para seleccionar operación
function set_operation(op) {
  if (operation !== null && !should_reset_display) {
    calculate();
  }
  
  previous_value = current_value;
  operation = op;
  should_reset_display = true;
}

// Función para calcular
function calculate() {
  if (operation === null || should_reset_display) return;
  
  const prev = parseFloat(previous_value);
  const current = parseFloat(current_value);
  
  let result = 0;
  
  switch(operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '×':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert('No se puede dividir por cero');
        clear_calculator();
        return;
      }
      result = prev / current;
      break;
  }
  
  current_value = result.toString();
  operation = null;
  previous_value = '';
  should_reset_display = true;
  update_display();
}

// Event listeners para los números
document.getElementById('seven').addEventListener('click', () => append_number('7'));
document.getElementById('eight').addEventListener('click', () => append_number('8'));
document.getElementById('nine').addEventListener('click', () => append_number('9'));
document.getElementById('four').addEventListener('click', () => append_number('4'));
document.getElementById('five').addEventListener('click', () => append_number('5'));
document.getElementById('six').addEventListener('click', () => append_number('6'));
document.getElementById('one').addEventListener('click', () => append_number('1'));
document.getElementById('two').addEventListener('click', () => append_number('2'));
document.getElementById('three').addEventListener('click', () => append_number('3'));
document.querySelector('.zero').addEventListener('click', () => append_number('0'));
document.querySelector('.btn:last-child').addEventListener('click', () => append_number('.'));

// Event listeners para las operaciones
document.getElementById('plus').addEventListener('click', () => set_operation('+'));
document.getElementById('minus').addEventListener('click', () => set_operation('-'));
document.getElementById('multiplication').addEventListener('click', () => set_operation('×'));
document.getElementById('division').addEventListener('click', () => set_operation('/'));

// Event listener para limpiar
document.getElementById('clean').addEventListener('click', clear_calculator);

// Event listener para igual
document.getElementById('equal').addEventListener('click', calculate);
