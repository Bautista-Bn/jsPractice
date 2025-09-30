function validarContrasena(password) {
  let tieneMayuscula = false;
  let tieneNumero = false;
  let errores = [];

  if (password.length < 6) {
    errores.push("Debe tener al menos 6 caracteres");
  }

  for (let i = 0; i < password.length; i++) {
    const caracter = password[i];
    
    if (caracter >= 'A' && caracter <= 'Z') {
      tieneMayuscula = true;
    }

    if (caracter >= '0' && caracter <= '9') {
      tieneNumero = true;
    }
  }

  if (!tieneMayuscula) {
    errores.push("Debe contener al menos una letra mayúscula");
  }

  if (!tieneNumero) {
    errores.push("Debe contener al menos un número");
  }

  if (errores.length === 0) {
    return {
      valida: true,
      mensaje: "✅ Contraseña Segura"
    };
  } else {
    return {
      valida: false,
      mensaje: "❌ Contraseña insegura",
      errores: errores
    };
  }
}

const password = prompt("Ingresa una contraseña:");

const resultado = validarContrasena(password);

console.log(resultado.mensaje);

if (resultado.valida) {
  alert(resultado.mensaje);
} else {
  console.log("Razones:");
  resultado.errores.forEach(error => console.log("- " + error));
  
  alert(resultado.mensaje + "\n\nRazones:\n" + resultado.errores.join("\n"));
}