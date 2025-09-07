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
  mensaje += `<p>Una huella baja y sostenible está por debajo de <strong>8 kg CO₂/día</strong>. Si estás por encima, es importante revisar tus hábitos.</p>`;
  
  if (huella < 8) {
    mensaje += `
      <div class="recomendacion buena">
        <p>🌱 ¡Excelente! Tus hábitos son sostenibles. Sigue así y comparte con otros lo que haces bien, como:</p>
        <ul>
          <li>Usar bicicleta o caminar</li>
          <li>Reducir consumo de carne</li>
          <li>Ahorrar electricidad y agua</li>
        </ul>
      </div>`;
  } else if (huella < 14) {
    mensaje += `
      <div class="recomendacion media">
        <p>⚠️ Estás en un punto intermedio. Aquí van algunas mejoras recomendadas:</p>
        <ul>
          <li>Reduce el uso del transporte privado</li>
          <li>Compra productos locales y reutilizables</li>
          <li>Evita duchas largas y apaga las luces</li>
        </ul>
      </div>`;
  } else {
    mensaje += `
      <div class="recomendacion alta">
        <p>🚨 ¡Cuidado! Tu huella de carbono es alta. Considera estos cambios:</p>
        <ul>
          <li>Usa más el transporte público o bicicleta</li>
          <li>Consume menos carne y más vegetales</li>
          <li>Evita el uso excesivo de electricidad</li>
          <li>Recicla y reutiliza todo lo que puedas</li>
        </ul>
      </div>`;
  }
  
  document.getElementById("resultado").innerHTML = mensaje;
  
});
