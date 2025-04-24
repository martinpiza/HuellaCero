document.getElementById("carbonForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    let huella = 0;
  
    const valores = {
      electrodomesticos: {
        bajo: 1, medio: 2, alto: 4
      },
      luces: {
        nunca: 0, aVeces: 1, siempre: 2
      },
      transporte: {
        bicicleta: 0, publico: 2, auto: 5
      },
      carne: {
        diario: 5, semanal: 3, ocasional: 1.5, nunca: 0
      },
      locales: {
        siempre: 0, aVeces: 1, nunca: 2
      },
      ropa: {
        mensual: 2, trimestral: 1, raraVez: 0.5
      },
      reutilizables: {
        siempre: 0, aVeces: 1, nunca: 2
      },
      ducha: {
        corta: 0.5, larga: 2
      },
      reciclaje: {
        si: 0, no: 2
      }
    };
  
    // Sumar los puntajes
    huella += valores.electrodomesticos[document.getElementById("electrodomesticos").value];
    huella += valores.luces[document.getElementById("luces").value];
    huella += valores.transporte[document.getElementById("transporte").value];
    huella += (parseFloat(document.getElementById("kmDia").value) * 0.3); // cada km suma
    huella += valores.carne[document.getElementById("carne").value];
    huella += valores.locales[document.getElementById("locales").value];
    huella += valores.ropa[document.getElementById("ropa").value];
    huella += valores.reutilizables[document.getElementById("reutilizables").value];
    huella += valores.ducha[document.getElementById("ducha").value];
    huella += valores.reciclaje[document.getElementById("reciclaje").value];
  
    // Resultado
    let mensaje = `Tu huella estimada es de <strong>${huella.toFixed(2)} kg CO₂/día</strong> 🌱<br>`;
    if (huella < 8) mensaje += "¡Muy bien! Tus hábitos son sostenibles 🌎";
    else if (huella < 14) mensaje += "Estás en buen camino, puedes mejorar algunos aspectos.";
    else mensaje += "¡Atención! Hay hábitos que podrías cambiar para ayudar más al planeta.";
  
    document.getElementById("resultado").innerHTML = mensaje;
  });
  