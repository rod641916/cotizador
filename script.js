function mostrar(event) {
    let container = document.getElementsByClassName("container")[0];
    let idioma_origen = document.getElementById("idioma_origen").value;
    let idioma_destino = document.getElementById("idioma_destino").value;
    if (
      idioma_origen === idioma_destino ||
      idioma_origen === "" ||
      idioma_destino === ""
    ) {
      Swal.fire({
        title: "Seleccione una combinación de idiomas validos",
        confirmButtonText: "Enterado",
        confirmButtonColor: "rgb(56, 111, 228)",
      });
    }
  }
  

  const idiomasMemo = {};
  
  function filtrarIdiomas() {
    let idiomaOrigen = document.getElementById("idioma_origen").value;
    let idiomaDestino = document.getElementById("idioma_destino");
  
    // Si ya tenemos las opciones para el idioma de origen en el memo, utilizarlas
    if (idiomasMemo[idiomaOrigen]) {
      const opcionesValidas = idiomasMemo[idiomaOrigen];
      for (let i = 0; i < idiomaDestino.options.length; i++) {
        idiomaDestino.options[i].style.display = opcionesValidas.includes(idiomaDestino.options[i].value) ? "block" : "none";
        console.log("Ya estan memorizadas")
      }
      return;
    }else{
      console.log("Aun no están memorizadas")
    }
  
    // Ocultar todas las opciones inicialmente
    for (let i = 0; i < idiomaDestino.options.length; i++) {
      idiomaDestino.options[i].style.display = "none";
    }
  
    let opcionesValidas = [];
  
    // Establecer opciones válidas según el idioma de origen
    switch (idiomaOrigen) {
      case "Alemán":
        opcionesValidas = ["Español"];
        break;
      case "Español":
        opcionesValidas = ["Portugués", "Inglés", "Francés", "Alemán", "Italiano", "Holandés", "Koreano", "Japones", "Chino"];
        break;
      case "Inglés":
      case "Francés":
      case "Italiano":
      case "Japones":
      case "Koreano":
      case "Holandés":
      case "Portugués":
      case "Chino":
        opcionesValidas = ["Español"];
        break;
      default:
        opcionesValidas = []; // No hay opciones válidas si el idioma de origen no es reconocido
        break;
    }
  
    // Guardar las opciones válidas en el memo
    idiomasMemo[idiomaOrigen] = opcionesValidas;
  
    // Mostrar las opciones válidas en el select de idioma destino
    for (let i = 0; i < idiomaDestino.options.length; i++) {
      if (opcionesValidas.includes(idiomaDestino.options[i].value)) {
        idiomaDestino.options[i].style.display = "block";
      }
    }
  }
  
  // Añade el evento change al select de idioma origen
  document.addEventListener("DOMContentLoaded", function () {
    let idiomaOrigen = document.getElementById("idioma_origen");
    idiomaOrigen.addEventListener("change", filtrarIdiomas);
  });
  
  
  function Calcular(event) {
    event.preventDefault();
    let palabras = document.getElementById("palabras").value;
    let idioma_origen = document.getElementById("idioma_origen").value;
    let idioma_destino = document.getElementById("idioma_destino").value;
    let documento_editable = document.getElementById("documento_editable").value;
  
    let cotizacion_basica = 0;
    let cotizacion_plus = 0;
    let cotizacion_exclusiva = 0;
  
    if (documento_editable === "Si") {
      switch (idioma_origen + "-" + idioma_destino) {
        case "Alemán-Español":
          cotizacion_basica = palabras * 2.0;
          cotizacion_plus = palabras * 2.3;
          cotizacion_exclusiva = palabras * 2.6;
          break;
        case "Inglés-Español":
          cotizacion_basica = palabras * 0.3;
          cotizacion_plus = palabras * 0.75;
          cotizacion_exclusiva = palabras * 1.08;
          console.log("Se actualizó");
          break;
        case "Español-Alemán":
          cotizacion_basica = palabras * 2.25;
          cotizacion_plus = palabras * 2.55;
          cotizacion_exclusiva = palabras * 2.85;
          break;
        case "Español-Inglés":
          cotizacion_basica = palabras * 0.4;
          cotizacion_plus = palabras * 0.85;
          cotizacion_exclusiva = palabras * 1.18;
          break;
        case "Español-Francés":
          cotizacion_basica = palabras * 1.75;
          cotizacion_plus = palabras * 2.05;
          cotizacion_exclusiva = palabras * 2.35;
          break;
        case "Español-Italiano":
          cotizacion_basica = palabras * 2.25;
          cotizacion_plus = palabras * 2.55;
          cotizacion_exclusiva = palabras * 2.85;
          break;
        case "Español-Japonés":
          cotizacion_basica = palabras * 3.75;
          cotizacion_plus = palabras * 4.05;
          cotizacion_exclusiva = palabras * 4.35;
          break;
        case "Español-Koreano":
          cotizacion_basica = palabras * 3.75;
          cotizacion_plus = palabras * 4.05;
          cotizacion_exclusiva = palabras * 4.35;
          break;
        case "Español-Holandés":
          cotizacion_basica = palabras * 4;
          cotizacion_plus = palabras * 4.3;
          cotizacion_exclusiva = palabras * 4.6;
          break;
        case "Español-Portugués":
          cotizacion_basica = palabras * 1.75;
          cotizacion_plus = palabras * 2.05;
          cotizacion_exclusiva = palabras * 2.35;
          break;
        case "Español-Chino":
          cotizacion_basica = palabras * 3.75;
          cotizacion_plus = palabras * 4.05;
          cotizacion_exclusiva = palabras * 4.35;
          break;
        case "Francés-Español":
          cotizacion_basica = palabras * 1.5;
          cotizacion_plus = palabras * 1.8;
          cotizacion_exclusiva = palabras * 2.1;
          break;
        case "Italiano-Español":
          cotizacion_basica = palabras * 2;
          cotizacion_plus = palabras * 2.3;
          cotizacion_exclusiva = palabras * 2.6;
          break;
        case "Japonés-Español":
          cotizacion_basica = palabras * 3.5;
          cotizacion_plus = palabras * 3.8;
          cotizacion_exclusiva = palabras * 4.1;
          break;
        case "Koreano-Español":
          cotizacion_basica = palabras * 3.5;
          cotizacion_plus = palabras * 3.8;
          cotizacion_exclusiva = palabras * 4.1;
          break;
        case "Holandés-Español":
          cotizacion_basica = palabras * 3.5;
          cotizacion_plus = palabras * 3.8;
          cotizacion_exclusiva = palabras * 4.1;
          break;
        case "Portugués-Español":
          cotizacion_basica = palabras * 1.5;
          cotizacion_plus = palabras * 1.8;
          cotizacion_exclusiva = palabras * 2.1;
          break;
        case "Chino-Español":
          cotizacion_basica = palabras * 3.5;
          cotizacion_plus = palabras * 3.8;
          cotizacion_exclusiva = palabras * 4.1;
          break;
        default:
          cotizacion_basica = 0;
          cotizacion_plus = 0;
          cotizacion_exclusiva = 0;
          break;
      }
    } else {
      switch (idioma_origen + "-" + idioma_destino) {
        case "Alemán-Español":
          cotizacion_basica = palabras * 2.3;
          cotizacion_plus = palabras * 2.6;
          cotizacion_exclusiva = palabras * 2.9;
          break;
        case "Inglés-Español":
          cotizacion_basica = palabras * 0.6;
          cotizacion_plus = palabras * 1.05;
          cotizacion_exclusiva = palabras * 1.38;
          console.log("Se actualizó sin formato");
          break;
        case "Español-Alemán":
          cotizacion_basica = palabras * 2.55;
          cotizacion_plus = palabras * 2.85;
          cotizacion_exclusiva = palabras * 3.15;
          break;
        case "Español-Inglés":
          cotizacion_basica = palabras * 0.7;
          cotizacion_plus = palabras * 1.15;
          cotizacion_exclusiva = palabras * 1.48;
          break;
        case "Español-Francés":
          cotizacion_basica = palabras * 2.05;
          cotizacion_plus = palabras * 2.35;
          cotizacion_exclusiva = palabras * 2.65; // precios ajustados
          break;
        case "Español-Italiano":
          cotizacion_basica = palabras * 2.55;
          cotizacion_plus = palabras * 2.85;
          cotizacion_exclusiva = palabras * 1.15;
          break;
        case "Español-Japonés":
          cotizacion_basica = palabras * 4.05;
          cotizacion_plus = palabras * 4.35;
          cotizacion_exclusiva = palabras * 4.65;
          break;
        case "Español-Koreano":
          cotizacion_basica = palabras * 4.05;
          cotizacion_plus = palabras * 4.35;
          cotizacion_exclusiva = palabras * 4.65;
          break;
        case "Español-Holandés":
          cotizacion_basica = palabras * 4.3;
          cotizacion_plus = palabras * 4.6;
          cotizacion_exclusiva = palabras * 4.9;
          break;
        case "Español-Portugués":
          cotizacion_basica = palabras * 2.05;
          cotizacion_plus = palabras * 2.35;
          cotizacion_exclusiva = palabras * 2.65; // precio ajustado
          break;
        case "Español-Chino":
          cotizacion_basica = palabras * 4.05;
          cotizacion_plus = palabras * 4.35;
          cotizacion_exclusiva = palabras * 4.65;
          break;
        case "Francés-Español":
          cotizacion_basica = palabras * 1.8;
          cotizacion_plus = palabras * 2.1;
          cotizacion_exclusiva = palabras * 2.4;
          break;
        case "Italiano-Español":
          cotizacion_basica = palabras * 2.3;
          cotizacion_plus = palabras * 2.6;
          cotizacion_exclusiva = palabras * 2.9;
          break;
        case "Japonés-Español":
          cotizacion_basica = palabras * 3.8;
          cotizacion_plus = palabras * 4.1;
          cotizacion_exclusiva = palabras * 4.4;
          break;
        case "Koreano-Español":
          cotizacion_basica = palabras * 3.8;
          cotizacion_plus = palabras * 4.1;
          cotizacion_exclusiva = palabras * 4.4;
          break;
        case "Holandés-Español":
          cotizacion_basica = palabras * 3.8;
          cotizacion_plus = palabras * 4.1;
          cotizacion_exclusiva = palabras * 4.4;
          break;
        case "Portugués-Español":
          cotizacion_basica = palabras * 1.8;
          cotizacion_plus = palabras * 2.1;
          cotizacion_exclusiva = palabras * 2.4;
          break;
        case "Chino-Español":
          cotizacion_basica = palabras * 3.8;
          cotizacion_plus = palabras * 4.1;
          cotizacion_exclusiva = palabras * 4.4;
          break;
        default:
          cotizacion_basica = 0;
          cotizacion_plus = 0;
          cotizacion_exclusiva = 0;
          break;
      }
    }
  
    document.getElementById("cotizacion_basica").innerHTML =
      "$" + cotizacion_basica.toFixed(2);
    document.getElementById("cotizacion_plus").innerHTML =
      "$" + cotizacion_plus.toFixed(2);
    document.getElementById("cotizacion_exclusiva").innerHTML =
      "$" + cotizacion_exclusiva.toFixed(2);
  }
  
  document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      Calcular(event);
      mostrar(event);
    }
  });
  document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      Calcular(event);
      mostrar(event);
    });
  });
  
  function Informacion(event) {
    //Se cre la función para la alerta de información
    Swal.fire({
      title: "Documento editable y no editable",
      text: "Un documento editable es aquel que puede ser modificado en su totalidad sin necesidad de ser pasado por algun programa externo, mientras que un documento no editable es aquel que no puede ser modificado y requiere ser procesado para transformarlo",
      confirmButtonText: "Enterado",
      confirmButtonColor: "rgb(56, 111, 228)",
    });
  }
  