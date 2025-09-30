// Array inicial con el orden de largada
let pilotos = [
  "Max Verstappen",
  "Sergio Pérez",
  "Charles Leclerc",
  "George Russell",
  "Lewis Hamilton",
  "Fernando Alonso",
  "Carlos Sainz"
];

console.log("🏁 CARRERA DE FÓRMULA 1 🏁\n");

// 1. Mostrar pilotos en orden alfabético (sin modificar el array original)
console.log("📋 Orden alfabético de pilotos:");
const pilotosOrdenados = [...pilotos].sort();
console.log(pilotosOrdenados.join(", "));
console.log("\n---\n");

// 2. Mostrar pilotos en 3er y 5to puesto
console.log("📍 Posiciones específicas:");
console.log(`3er puesto: ${pilotos[2]}`);
console.log(`5to puesto: ${pilotos[4]}`);
console.log("\n---\n");

// 3. Se suman tres pilotos más al final
pilotos.push("Pierre Gasly", "Valtteri Bottas", "Lance Stroll");
console.log("➕ Se sumaron 3 pilotos más:");
console.log(pilotos.join(", "));
console.log("\n---\n");

// 4. Lewis Hamilton avanzó al primer puesto
const indexHamilton = pilotos.indexOf("Lewis Hamilton");
pilotos.splice(indexHamilton, 1); // Lo quitamos de su posición
pilotos.unshift("Lewis Hamilton"); // Lo ponemos al inicio
console.log("⚡ Lewis Hamilton avanzó al 1er puesto:");
console.log(pilotos.join(", "));
console.log("\n---\n");

// 5. Russell pasó al 6to puesto
const indexRussell = pilotos.indexOf("George Russell");
pilotos.splice(indexRussell, 1); // Lo quitamos
pilotos.splice(5, 0, "George Russell"); // Lo insertamos en posición 5 (6to puesto)
console.log("🔄 Russell pasó al 6to puesto:");
console.log(pilotos.join(", "));
console.log("\n---\n");

// 6. Carlos Sainz salió de la carrera
const indexSainz = pilotos.indexOf("Carlos Sainz");
pilotos.splice(indexSainz, 1);
console.log("❌ Carlos Sainz salió de la carrera:");
console.log(pilotos.join(", "));
console.log("\n---\n");

// 7. Alonso avanzó al 2do puesto sacando al que estaba ahí
const indexAlonso = pilotos.indexOf("Fernando Alonso");
pilotos.splice(indexAlonso, 1); // Quitamos a Alonso
pilotos.splice(1, 1, "Fernando Alonso"); // Lo ponemos en 2do y sacamos al que estaba
console.log("🚀 Alonso avanzó al 2do puesto:");
console.log(pilotos.join(", "));
console.log("\n---\n");

// 8. Pérez quedó en último lugar
const indexPerez = pilotos.indexOf("Sergio Pérez");
pilotos.splice(indexPerez, 1); // Lo quitamos
pilotos.push("Sergio Pérez"); // Lo ponemos al final
console.log("🔧 Pérez se retrasó en Boxes y quedó último:");
console.log(pilotos.join(", "));
console.log("\n---\n");

// 9. Mostrar el podio (3 primeros puestos)
const podio = pilotos.slice(0, 3);
console.log("🏆 ¡LA CARRERA HA TERMINADO! 🏆");
console.log("\n🥇🥈🥉 PODIO:");
console.log(`1° - ${podio[0]}`);
console.log(`2° - ${podio[1]}`);
console.log(`3° - ${podio[2]}`);
console.log("\n🎉 ¡Felicidades a los ganadores! 🎉");