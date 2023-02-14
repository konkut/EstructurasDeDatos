let modalFondo = document.querySelector(".modalBackground");
let modalFondoError = document.querySelector(".modalBackgroundError");
let modal = document.querySelector(".modal");
let modalMensaje = document.querySelector(".modalMensaje");
let mensaje = document.querySelector(".modal p");
let mensajeError = document.querySelector(".modalMensaje p");
let textMax = document.querySelector(".text");

let count = 0;

let maximoValorCola;
let ingreso = false;
let adiciono = false;


let contenedor = document.querySelector(".draw");
let principio = document.querySelector(".principio");
let final = document.querySelector(".final");
let indice = document.querySelector(".indice");
let cola = document.querySelector(".cola");
let max = document.querySelector("[type='number']");


let nombreBoton;
let msg;
let arrayCola;
let arrayPrin;
let arrayFin;
let arrayColaData;
let contadorFin = 0;
let contadorPrin = 0;


document.addEventListener("click", (e) => {

  if (e.target.matches("[value='Crear']")) {
    ingreso = true;
    if (count >= 1) {
      limpiarCola();
    }
    count++;
    contadorFin = 0;
    contadorPrin = 0;
    borrarInput();
    vaciarInput();
    textMax.textContent = "";
    nombreBoton = "Crear Cola";
    crearBotonAccion(nombreBoton);
    msg = "Valor Maximo de la cola es: ";
    mostrarMensaje(msg);
  }
  if (e.target.matches("[value='Adicionar']")) {
    if (ingreso == true) {
      adiciono = true;
      borrarInput();
      vaciarInput();
      nombreBoton = "Adicionar Cola";
      crearBotonAccion(nombreBoton);
      msg = "Elemento adicionar es: ";
      mostrarMensaje(msg);
    }
  }

  if (e.target.matches("[value='Crear Cola']")) {
    maximoValorCola = document.querySelector("[type='hidden']").value = max.value;
    borrarInput();
    arrayCola = [];
    arrayPrin = ["PRIN"];
    arrayFin = ["FIN"];
    arrayColaData = [];
    for (let i = 0; i < maximoValorCola; i++) {
      arrayCola[i] = "";
    }
    crearCola();
    modalFondo.style.display = "none";
    textMax.textContent = `MAX = ${maximoValorCola}`;

  }


  if (e.target.matches("[value='Adicionar Cola']")) {
    maximoValorCola = document.querySelector("[type='hidden']").value;
    borrarInput();
    modalFondo.style.display = "none";

    if (contadorFin <= maximoValorCola) {
      let tamaño = arrayColaData.length;
      if (maximoValorCola == tamaño) {
        msg = "Cola llena";
        mostrarMensajeError(msg);
        temporizadorMensaje();
      } else {
        arrayFin.splice(contadorFin, 1, "");
        contadorFin++;
        arrayFin.push("FIN");
        if (arrayFin[maximoValorCola] == "FIN") {
          textMax.textContent = `FIN = MAX = ${maximoValorCola}`;
        }
        arrayColaData.push(max.value);
        modalFondo.style.display = "none";
        console.log(arrayColaData);
        limpiarCola();
        crearCola();
      }
    }
  };


  if (e.target.matches("[value='Eliminar']")) {

    if (ingreso == true && adiciono == true) {
      if (contadorPrin <= maximoValorCola) {
        maximoValorCola = document.querySelector("[type='hidden']").value;
        let tamaño = arrayColaData.length;
        console.log(tamaño);

        if (arrayFin[tamaño] == "FIN" && arrayPrin[tamaño] == "PRIN") {
          msg = "Cola Vacia";
          mostrarMensajeError(msg);
          temporizadorMensaje();
        } else {
          arrayPrin.splice(contadorPrin, 1, "");
          arrayPrin.push("PRIN");
          if (arrayPrin[maximoValorCola] == "PRIN") {
            textMax.textContent = `PRIN = FIN = MAX = ${maximoValorCola}`;
          }
          if (contadorFin <= maximoValorCola) {
            let numeroEliminado = arrayColaData[contadorPrin];
            msg = `Elemento eliminado es: ${numeroEliminado}`;
            mostrarMensajeError(msg);
            temporizadorMensaje();
            arrayColaData.splice(contadorPrin, 1, "");
            contadorPrin++;
            modalFondo.style.display = "none";
            limpiarCola();
            crearCola();
          }

        }
      }
    }
  }
});

const temporizadorMensaje = () => {
  setTimeout(() => {
    modalFondoError.style.display = "none";
    modalFondo.style.display = "none";
  }, 1500);
}
const crearCola = () => {
  let frag1 = document.createDocumentFragment();
  let frag2 = document.createDocumentFragment();
  let frag3 = document.createDocumentFragment();
  let frag4 = document.createDocumentFragment();
  for (const elemento in arrayCola) {
    let div = document.createElement("div");
    div.classList.add(`posicion-${elemento}`, "colaClase");
    div.style.backgroundColor = "orange";
    diseñoEstructuraDatos(div);
    div.textContent = arrayColaData[elemento];
    frag1.appendChild(div);
  }
  for (const elemento in arrayCola) {
    let indiceCola = document.createElement("div");
    indiceCola.classList.add(`indice-${elemento}`, `indiceClase`);
    indiceCola.style.backgroundColor = "gray";
    diseñoEstructuraDatos(indiceCola);
    indiceCola.textContent = `${elemento}`;
    frag2.appendChild(indiceCola);
  }
  for (const elemento in arrayCola) {
    let principioCola = document.createElement("div");
    principioCola.classList.add(`rangoPrin-${elemento}`, "principioClase");
    principioCola.style.backgroundColor = "#555";
    diseñoEstructuraDatosLimites(principioCola);
    principioCola.textContent = arrayPrin[elemento];
    frag3.appendChild(principioCola);
  }
  for (const elemento in arrayCola) {
    let finalCola = document.createElement("div");
    finalCola.classList.add(`rangoFin-${elemento}`, "finalClase");
    finalCola.style.backgroundColor = "#000";
    diseñoEstructuraDatosLimites(finalCola);
    finalCola.textContent = arrayFin[elemento];
    frag4.appendChild(finalCola);
  }
  cola.appendChild(frag1);
  indice.appendChild(frag2);
  principio.appendChild(frag3);
  final.appendChild(frag4);
}
const mostrarMensaje = (msg) => {
  mensaje.textContent = msg;
  modalFondo.style.display = "flex";
}
const mostrarMensajeError = (msg) => {
  mensajeError.textContent = msg;
  modalFondoError.style.display = "flex";
}
const borrarInput = () => {
  const items = modal.children;
  for (let item of items) {
    if (item.classList.contains("action")) {
      modal.removeChild(item);
    }
  }
}
const crearBotonAccion = (nombre) => {
  let input = document.createElement("input");
  input.value = nombre;
  input.classList.add("action");
  input.type = "submit";
  modal.appendChild(input);
}
const vaciarInput = () => {
  max.value = "";
}
const diseñoEstructuraDatos = (elemento) => {
  elemento.style.lineHeight = "1.8rem";
  elemento.style.flexBasis = "10%";
  elemento.style.height = "1.8rem";
  elemento.style.color = "white";
}
const diseñoEstructuraDatosLimites = (elemento) => {
  elemento.style.lineHeight = "1.0rem";
  elemento.style.flexBasis = "10%";
  elemento.style.height = "1.0rem";
  elemento.style.color = "white";
}
const limpiarCola = () => {
  let principioClase = document.querySelectorAll(".principioClase");
  let finalClase = document.querySelectorAll(".finalClase");
  let indiceClase = document.querySelectorAll(".indiceClase");
  let colaClase = document.querySelectorAll(".colaClase");
  for (let item1 of principioClase) {
    principio.removeChild(item1);
  }
  for (let item2 of finalClase) {
    final.removeChild(item2);
  }
  for (let item3 of indiceClase) {
    indice.removeChild(item3);
  }
  for (let item4 of colaClase) {
    cola.removeChild(item4);
  }
}





