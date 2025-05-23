document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const ageGroup = document.getElementById('ageGroup').value;
    let questionsHTML = "";
  
    // Dependiendo de la edad, mostrar preguntas específicas
    if (ageGroup === 'niño') {
      questionsHTML = `
        <div class="question">
          <label>¿Cómo llegas al colegio?</label>
          <select id="transporte">
            <option value="1">A pie</option>
            <option value="2">En bicicleta</option>
            <option value="3">En bus</option>
            <option value="4">En carro</option>
          </select>
        </div>
        <div class="question">
          <label>¿Reciclas en tu casa?</label>
          <select id="reciclaje">
            <option value="1">Sí</option>
            <option value="2">A veces</option>
            <option value="3">No</option>
          </select>
        </div>`;
    } else if (ageGroup === 'adolescente') {
      questionsHTML = `
        <div class="question">
          <label>¿Cómo te mueves a la escuela o a tus actividades?</label>
          <select id="transporte">
            <option value="1">A pie</option>
            <option value="2">En bicicleta</option>
            <option value="3">En bus</option>
            <option value="4">En carro</option>
          </select>
        </div>
        <div class="question">
          <label>¿Reciclas en casa?</label>
          <select id="reciclaje">
            <option value="1">Sí</option>
            <option value="2">A veces</option>
            <option value="3">No</option>
          </select>
        </div>`;
    } else if (ageGroup === 'adulto') {
      questionsHTML = `
        <div class="question">
          <label>¿Cuál es tu medio principal de transporte?</label>
          <select id="transporte">
            <option value="1">Bicicleta</option>
            <option value="2">Coche</option>
            <option value="3">Transporte público</option>
            <option value="4">A pie</option>
          </select>
        </div>
        <div class="question">
          <label>¿Reciclas todos los residuos en tu casa?</label>
          <select id="reciclaje">
            <option value="1">Sí</option>
            <option value="2">A veces</option>
            <option value="3">No</option>
          </select>
        </div>`;
    } else if (ageGroup === 'adulto_mayor') {
      questionsHTML = `
        <div class="question">
          <label>¿Tienes vehículo propio?</label>
          <select id="vehiculo">
            <option value="1">Sí</option>
            <option value="2">No</option>
          </select>
        </div>
        <div class="question">
          <label>¿Reciclas en tu hogar?</label>
          <select id="reciclaje">
            <option value="1">Sí</option>
            <option value="2">No</option>
          </select>
        </div>`;
    }
  
    document.getElementById('questions').innerHTML = questionsHTML;
  });
  