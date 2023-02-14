let modalFondo = document.querySelector(".modalBackground");
let modalFondoError = document.querySelector(".modalBackgroundError");
let contenedor = document.querySelector(".draw");
let limite = document.querySelector(".limite");
let indice = document.querySelector(".indice");
let pila = document.querySelector(".pila");
let modal = document.querySelector(".modal");
let modalMensaje = document.querySelector(".modalMensaje");
let mensaje = document.querySelector(".modal p");
let mensajeError = document.querySelector(".modalMensaje p");
let max = document.querySelector("[type='number']");
let textMax = document.querySelector(".text");
let count = 0;
let EliminarButton = 0;
let maximoValorPila;
let ingreso = false;
let adiciono = false;
let verificar = false;
document.addEventListener("click", (e) => {
  if (e.target.matches("[value='Crear']")) {
    ingreso = true;
    borrarInput();
    if (count >= 1) {
      limpiarPila();
    }
    max.value = "";
    textMax.textContent = "";
    count++;
    let msg = "Valor Maximo de la pila es: ";
    let input = document.createElement("input");
    input.value = "Crear Pila";
    input.classList.add("action");
    input.type = "submit";
    mostrarMensaje(msg, input);
  }
  if (e.target.matches("[value='Crear Pila']")) {

    maximoValorPila = document.querySelector("[type='hidden']").value = max.value;
    borrarInput();

    for (let i = maximoValorPila - 1; i >= 0; i--) {
      let indicePila = document.createElement("div");
      indicePila.textContent = `${i}`;
      indicePila.classList.add(`indiceClase`);
      indicePila.style.backgroundColor = "gray";
      indicePila.style.lineHeight = "1.8rem";
      indicePila.style.color = "white";
      indice.appendChild(indicePila);

      let limitesPila = document.createElement("div");
      limitesPila.classList.add(`rango-${i}`, "limiteClase");
      limitesPila.style.backgroundColor = "black";
      limitesPila.style.lineHeight = "1.8rem";
      limitesPila.style.color = "white";
      if (i == 0) {
        limitesPila.textContent = "TOPE";
      }
      limite.appendChild(limitesPila);

      let div = document.createElement("div");
      div.classList.add(`posicion-${i}`, "pilaClase");
      // div.textContent = `${i}`;
      div.style.backgroundColor = "orange";
      div.style.lineHeight = "1.8rem";
      div.style.fontWeight = "bolder";
      pila.appendChild(div);
    }
    modalFondo.style.display = "none";
    textMax.textContent = `MAX = ${maximoValorPila}`;

  }


  if (e.target.matches("[value='Adicionar']")) {
    if (ingreso == true) {
      adiciono = true;
      borrarInput();
      msg = "Elemento adicionar es: ";
      let input1 = document.createElement("input");
      input1.value = "Adicionar Pila";
      input1.type = "button";
      input1.classList.add("action");
      max.value = "";
      mostrarMensaje(msg, input1);
    }
  }
  if (e.target.matches("[value='Adicionar Pila']")) {
    maximoValorPila = document.querySelector("[type='hidden']").value;
    borrarInput();
    for (let i = 0; i < maximoValorPila; i++) {
      let avanzar = document.querySelector(`.posicion-${i}`);
      let topeAvanzar = document.querySelector(`.rango-${i}`);
      if (avanzar.textContent == "") {
        avanzar.textContent = max.value;

        if (topeAvanzar.textContent == "TOPE" && i < maximoValorPila - 1) {
          let nuevoTope = document.querySelector(`.rango-${i + 1}`);
          nuevoTope.textContent = "TOPE";
          topeAvanzar.textContent = "";
        } else {
          topeAvanzar.textContent = "";
          textMax.textContent = `TOPE = MAX = ${maximoValorPila}`;
        }

        modalFondo.style.display = "none";
        return;
      }
      modalFondo.style.display = "none";
      if (avanzar.textContent != "" && i == maximoValorPila - 1) {
        msg = "Pila llena";
        mostrarMensajeError(msg);
        setTimeout(() => {
          modalFondoError.style.display = "none";

        }, 1000);
        return;
      }
    }
  };
  if (e.target.matches("[value='Eliminar']")) {
    if (ingreso == true && adiciono == true) {
      let numeroEliminado;
      maximoValorPila = document.querySelector("[type='hidden']").value;

      for (let i = maximoValorPila - 1; i >= 0; i--) {

        let topeAvanzar1 = document.querySelector(`.rango-${i}`);
        let avanzar11 = document.querySelector(`.posicion-${maximoValorPila - 1}`);
        console.log(avanzar11);


        if (avanzar11.textContent != "" && i == maximoValorPila - 1) {
          topeAvanzar1.textContent = "";
          let topeArriba = document.querySelector(`.rango-${maximoValorPila - 1}`);
          topeArriba.textContent = "TOPE";
          break;
        }

        if (topeAvanzar1.textContent == "TOPE" && i > 0) {
          topeAvanzar1.textContent = "";
          let nuevoTope = document.querySelector(`.rango-${i - 1}`);
          nuevoTope.textContent = "TOPE";
          break;
        }
        if (i == 0) {
          msg = "Pila Vacia";
          mostrarMensajeError(msg);
          setTimeout(() => {
            modalFondoError.style.display = "none";
            modalFondo.style.display = "none";
          }, 1000);
          break;
        }
      }

      for (let i = maximoValorPila - 1; i >= 0; i--) {
        let avanzar1 = document.querySelector(`.posicion-${i}`);
        if (avanzar1.textContent != "") {
          numeroEliminado = avanzar1.textContent;
          msg = `Elemento eliminado es: ${numeroEliminado}`;
          mostrarMensajeError(msg);
          setTimeout(() => {
            modalFondoError.style.display = "none";
          }, 1000);
          avanzar1.textContent = "";
          break;
        }

      }

    }

  }
});
const borrarInput = () => {
  const items = modal.children;
  for (let item of items) {
    if (item.classList.contains("action")) {
      modal.removeChild(item);
    }
  }
}
const mostrarMensaje = (msg, input) => {
  mensaje.textContent = msg;
  modal.appendChild(input);
  modalFondo.style.display = "flex";
}
const mostrarMensajeError = (msg) => {
  mensajeError.textContent = msg;
  modalFondoError.style.display = "flex";
}

const limpiarPila = () => {
  let limiteClase = document.querySelectorAll(".limiteClase");
  let indiceClase = document.querySelectorAll(".indiceClase");
  let pilaClase = document.querySelectorAll(".pilaClase");
  for (let item1 of limiteClase) {
    limite.removeChild(item1);
  }
  for (let item2 of indiceClase) {
    indice.removeChild(item2);
  }
  for (let item3 of pilaClase) {
    pila.removeChild(item3);
  }
}