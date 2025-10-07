document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('mensaje_correcto').style.display = 'none';
  document.getElementById('mensaje_error').style.display = 'none';
});

function limpiar_input() {
  document.getElementById('mensaje_correcto').style.display = 'none';
  document.getElementById('mensaje_error').style.display = 'none';
}

function buscar_palabra() {
  const texto = document.getElementById('texto').value.trim();
  const palabra = document.getElementById('palabra').value.trim();
  
  const mensaje_correcto = document.getElementById('mensaje_correcto');
  const mensaje_error = document.getElementById('mensaje_error');
  
  mensaje_correcto.style.display = 'none';
  mensaje_error.style.display = 'none';
  
  if (texto === '' || palabra === '') {
    mensaje_error.innerHTML = 'Por favor, complete ambos campos.';
    mensaje_error.style.display = 'block';
    return;
  }
  
  const texto_minusculas = texto.toLowerCase();
  const palabra_minusculas = palabra.toLowerCase();
  
  const palabras_en_texto = texto_minusculas.split(/\s+/);
  let contador = 0;
  
  palabras_en_texto.forEach(function(p) {
    const palabra_limpia = p.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()¿?¡!]/g, '');
    if (palabra_limpia === palabra_minusculas) {
      contador++;
    }
  });
  
  if (contador > 0) {
    mensaje_correcto.innerHTML = `La palabra "<strong>${palabra}</strong>" se encontró <strong>${contador}</strong> ${contador === 1 ? 'vez' : 'veces'} en el texto.`;
    mensaje_correcto.style.display = 'block';
  } else {
    mensaje_error.innerHTML = `La palabra "<strong>${palabra}</strong>" no se encontró en el texto.`;
    mensaje_error.style.display = 'block';
  }
}