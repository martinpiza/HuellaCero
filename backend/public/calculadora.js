const preguntas = document.querySelectorAll(".pregunta");
const barra = document.getElementById("barraProgreso");
let indice = 0;

function mostrarPregunta(i) {
  preguntas.forEach((p, idx) => p.style.display = (idx === i ? "block" : "none"));

  // Barra de progreso
  const progreso = ((i + 1) / preguntas.length) * 100;
  barra.style.width = progreso + "%";

  // Botones
  document.getElementById("btnAtras").style.display = (i === 0) ? "none" : "inline-block";
  document.getElementById("btnSiguiente").style.display = (i === preguntas.length - 1) ? "none" : "inline-block";
  document.getElementById("btnFinalizar").style.display = (i === preguntas.length - 1) ? "inline-block" : "none";
}

// Botón siguiente
document.getElementById("btnSiguiente").addEventListener("click", () => {
  if (indice < preguntas.length - 1) {
    indice++;
    mostrarPregunta(indice);
  }
});

// Botón atrás
document.getElementById("btnAtras").addEventListener("click", () => {
  if (indice > 0) {
    indice--;
    mostrarPregunta(indice);
  }
});

// Cálculo final
document.getElementById("carbonForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let huella = 0;
  const kmInput = parseFloat(document.getElementById("kmDia").value);
  if (isNaN(kmInput) || kmInput < 0) {
    alert("Por favor ingresa un número válido de kilómetros.");
    return;
  }

  const valores = {
    electrodomesticos: { bajo: 1, medio: 2, alto: 4 },
    luces: { nunca: 0, aVeces: 1, siempre: 2 },
    transporte: { bicicleta: 0, publico: 2, auto: 5 },
    carne: { diario: 5, semanal: 3, ocasional: 1.5, nunca: 0 },
    locales: { siempre: 0, aVeces: 1, nunca: 2 },
    ropa: { mensual: 2, trimestral: 1, raraVez: 0.5 },
    reutilizables: { siempre: 0, aVeces: 1, nunca: 2 },
    ducha: { corta: 0.5, larga: 2 },
    reciclaje: { si: 0, no: 2 }
  };

  huella += valores.electrodomesticos[document.getElementById("electrodomesticos").value];
  huella += valores.luces[document.getElementById("luces").value];
  huella += valores.transporte[document.getElementById("transporte").value];
  huella += kmInput * 0.3;
  huella += valores.carne[document.getElementById("carne").value];
  huella += valores.locales[document.getElementById("locales").value];
  huella += valores.ropa[document.getElementById("ropa").value];
  huella += valores.reutilizables[document.getElementById("reutilizables").value];
  huella += valores.ducha[document.getElementById("ducha").value];
  huella += valores.reciclaje[document.getElementById("reciclaje").value];

  let mensaje = `<h3>Resultado</h3>`;
  mensaje += `<p>Tu huella estimada es de <strong>${huella.toFixed(2)} kg CO₂/día</strong>.</p>`;
  mensaje += `<p>Una huella baja está por debajo de <strong>8 kg CO₂/día</strong>.</p>`;

  if (huella < 8) {
    mensaje += `<div class="recomendacion buena"><p>🌱 ¡Excelente! Tus hábitos son sostenibles.</p></div>`;
  } else if (huella < 14) {
    mensaje += `<div class="recomendacion media"><p>⚠️ Estás en un punto intermedio, puedes mejorar.</p></div>`;
  } else {
    mensaje += `<div class="recomendacion alta"><p>🚨 Tu huella es alta, considera cambios importantes.</p></div>`;
  }

  document.getElementById("resultado").innerHTML = mensaje;
});

// Mostrar primera pregunta
mostrarPregunta(indice);
