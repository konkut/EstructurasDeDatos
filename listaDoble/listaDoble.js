
let modalFondo = document.querySelector(".modalBackground");
let modalFondoError = document.querySelector(".modalBackgroundError");
let modal = document.querySelector(".modal");
let modalMensaje = document.querySelector(".modalMensaje");
let mensaje = document.querySelector(".modal p");
let mensajeError = document.querySelector(".modalMensaje p");
let textMax = document.querySelector(".text");


let EliminarButton = 0;
let maximoValorCola;
let adiciono = false;


let contenedorLista = document.querySelector(".shadow");
let contenedor = document.querySelector(".draw");

let max = document.querySelector(".form__numero");
let limites = document.querySelector(".form__limites");
let inicio = document.querySelector(".inicio");

let flecha;
let dato;
let next;
let nodo;


let nombreBoton;
let msg;
let arrayCola;
let arrayPrin;
let arrayFin;
let arrayColaData;
let encontrarFin;
let encontrarPrin;
let funcionDeAvance = 0;
let funcionDeAvance2 = 0;

let incrementarPadding = 0;
let listaNodos = {
  dato: [],
  indiceL: [],
  indiceR: [],
  indiceW: [],
  indiceQ: []
};
let array = [];
let sw = false;
let valorAux;
let obtenerElemento;
let indicebuscarX;
let indiceDato;
let indiceBuscarQ;
let padre;
let contenedorQ;

let NodoContenedor;
let NodosIndice;
let NodoL;
let NodoR;
let NodoW;
let NodoQ;
let indiceNodoEventoinicio = 0;
let indiceNodoEventofinal = listaNodos['dato'].length - 1;

let contenedorQClass = document.querySelector(".contenedorQ");
let contenedorNodos = document.querySelector(".content");

let firstElement;

document.addEventListener("click", (e) => {
  // console.log(e.target);
  if (e.target.matches("[value='Adicionar Adelante']")) {
    borrarInput();
    vaciarInput();
    limites.style.display = "none";
    nombreBoton = "Adicionar Nodo Adelante";
    crearBotonAccion(nombreBoton);
    msg = "Elemento adicionar es: ";
    mostrarMensaje(msg);
  }
  if (e.target.matches("[value='Adicionar Final']")) {
    borrarInput();
    vaciarInput();
    limites.style.display = "none";
    nombreBoton = "Adicionar Nodo Final";
    crearBotonAccion(nombreBoton);
    msg = "Elemento adicionar es: ";
    mostrarMensaje(msg);

  }
  if (e.target.matches("[value='Adicionar Antes']")) {
    validarNodos = contenedorLista.hasChildNodes();
    if (!validarNodos) {
      msg = `No existe nodos en la lista`;
      mostrarMensajeError(msg);
      temporizadorMensaje();
    } else {
      borrarInput();
      vaciarInput();
      limites.style.display = "block";
      limites.placeholder = "Antes de ...";
      nombreBoton = "Adicionar Nodo Antes";
      crearBotonAccion(nombreBoton);
      msg = "Elemento adicionar es: ";
      mostrarMensaje(msg);
    }
  }
  if (e.target.matches("[value='Adicionar Despues']")) {
    validarNodos = contenedorLista.hasChildNodes();
    if (!validarNodos) {
      msg = `No existe nodos en la lista`;
      mostrarMensajeError(msg);
      temporizadorMensaje();
    } else {
      borrarInput();
      vaciarInput();
      limites.style.display = "block";
      limites.placeholder = "Despues de ...";
      nombreBoton = "Adicionar Nodo Despues";
      crearBotonAccion(nombreBoton);
      msg = "Elemento adicionar es: ";
      mostrarMensaje(msg);

    }

  }



  if (e.target.matches("[value='Limpiar Lista']")) {
    vaciarLista();
    array = [];
  }


  if (e.target.matches("[value='Adicionar Nodo Adelante']")) {
    e.preventDefault();
    try {
      let regex = /[\s]+/ig;
      if (regex.test(max.value) || max.value == "") {
        msg = `Valor No Permitido`;
        mostrarMensajeError(msg);
        temporizadorMensaje();
        vaciarLista();
        crearLista();
        throw "error";
      }
      borrarRyQyW();
      crearListaInicio();
      vaciarLista();
      crearLista();
      crearNullPre();

    } catch (e) {

    }
  };
  if (e.target.matches("[value='Adicionar Nodo Final']")) {
    e.preventDefault();
    try {
      let regex = /[\s]+/ig;
      if (regex.test(max.value) || max.value == "") {
        msg = `Valor No Permitido`;
        mostrarMensajeError(msg);
        temporizadorMensaje();
        vaciarLista();
        crearLista();
        throw "error";
      }
      borrarRyQyW();
      crearListaFinal();
      vaciarLista();
      crearLista();
      crearNullPre();
    } catch (e) {

    }
  };
  if (e.target.matches("[value='Adicionar Nodo Antes']")) {
    e.preventDefault();
    try {
      let regex = /[\s]+/ig;
      if (regex.test(max.value) || max.value == "" || limites.value == "" || regex.test(limites.value)) {
        msg = `Valor No Permitido`;
        mostrarMensajeError(msg);
        temporizadorMensaje();
        vaciarLista();
        crearLista();
        throw "error";
      }
      borrarRyQyW();
      validarNodos = contenedorLista.hasChildNodes;
      if (!validarNodos) {
        console.log("no hay nodos");
      } else {
        indiceDato = listaNodos["dato"].indexOf(limites.value);
        if (indiceDato !== -1) {
          if (listaNodos["dato"].indexOf(limites.value) == 0) {
            crearListaInicio();
            obtenerArrayLista("indiceR").splice(indiceDato + 1, 1, "R");
            vaciarLista();
            crearLista();
            console.table(listaNodos);

          } else {
            obtenerArrayLista("dato").splice(indiceDato, 0, max.value);
            obtenerArrayLista("indiceL").splice(indiceDato, 0, "");
            obtenerArrayLista("indiceR").splice(indiceDato + 1, 0, "R");
            obtenerArrayLista("indiceW").splice(indiceDato, 0, "");
            obtenerArrayLista("indiceQ").splice(indiceDato, 0, "Q");
            for (let i = 0; i < listaNodos["indiceL"].length; i++) {
              if (i == 0) {
                listaNodos["indiceL"][i] = "L";
              } else {
                listaNodos["indiceL"][i] = "";
              }
            }
            vaciarLista();
            crearLista();
          }
          console.table(listaNodos);
        } else {
          vaciarLista();
          crearLista();
        }
      }
    } catch (e) {

    }
  };

  if (e.target.matches("[value='Adicionar Nodo Despues']")) {
    e.preventDefault();
    try {
      let regex = /[\s]+/ig;
      if (regex.test(max.value) || max.value == "" || limites.value == "" || regex.test(limites.value)) {
        msg = `Valor No Permitido`;
        mostrarMensajeError(msg);
        temporizadorMensaje();
        vaciarLista();
        crearLista();
        throw "error";
      }
      borrarRyQyW();
      validarNodos = contenedorLista.hasChildNodes();
      if (validarNodos) {
        indiceDato = listaNodos["dato"].indexOf(limites.value);
        if (indiceDato !== -1) {
          if (indiceDato == (listaNodos["dato"].length) - 1) {
            crearListaFinal();
            vaciarLista();
            crearLista();
          } else {
            obtenerArrayLista("dato").splice(indiceDato + 1, 0, max.value);
            obtenerArrayLista("indiceL").splice(indiceDato, 0, "");
            obtenerArrayLista("indiceW").splice(indiceDato, 0, "");
            obtenerArrayLista("indiceR").splice(indiceDato, 0, "R");
            obtenerArrayLista("indiceQ").splice(indiceDato + 1, 0, "Q");
            for (let i = 0; i < listaNodos["indiceL"].length; i++) {
              if (i == 0) {
                listaNodos["indiceL"][i] = "L";
              } else {
                listaNodos["indiceL"][i] = "";
              }
            }
            vaciarLista();
            crearLista();
          }
        }
      }
    } catch (e) {

    }

  };
  if (e.target.matches("[value='Eliminar Inicio']")) {
    e.preventDefault();
    try {
      borrarRyQyW();
      if (obtenerArrayLista("dato").length == 0) {
        msg = `No existe nodos en la lista`;
        mostrarMensajeError(msg);
        temporizadorMensaje();
      } else {
        let numeroEliminado = obtenerArrayLista("dato")[0];
        msg = `Elemento eliminado es: ${numeroEliminado}`;
        mostrarMensajeError(msg);
        temporizadorMensaje();

        for (let i = 0; i < listaNodos["indiceL"].length; i++) {
          if (i == 0) {
            listaNodos["indiceR"][i] = "R";
          }
          if (i == 1) {
            listaNodos["indiceL"][i] = "L";
          } else {
            listaNodos["indiceL"][i] = "";
          }
        }
        vaciarLista();
        crearLista();
        let nodoOpacidad = document.querySelector(".nodo-0");
        nodoOpacidad.style.opacity = "0.4";
        setTimeout(() => {
          obtenerArrayLista("dato").shift();
          obtenerArrayLista("indiceL").shift();
          obtenerArrayLista("indiceW").shift();
          obtenerArrayLista("indiceR").shift();
          obtenerArrayLista("indiceQ").shift();
          vaciarLista();
          if (obtenerArrayLista("dato").length > 0) {
            crearLista();
          }
          if (obtenerArrayLista("dato").length == 0) {
            inicio.style.display = "block";
            let borrarNullPrev = document.querySelector(".nullprev");
            borrarNullPrev.style.display = "none";
          }
        }, 3000);
      }
    } catch (e) {
      console.log(e);
    }
  }
  if (e.target.matches("[value='Eliminar Final']")) {
    e.preventDefault();
    borrarRyQyW();
    if (obtenerArrayLista("dato").length == 0) {
      msg = `No existe nodos en la lista`;
      mostrarMensajeError(msg);
      temporizadorMensaje();
    } else {
      let numeroEliminado = obtenerArrayLista("dato")[listaNodos["dato"].length - 1];
      msg = `Elemento eliminado es: ${numeroEliminado}`;
      mostrarMensajeError(msg);
      temporizadorMensaje();
      console.table(listaNodos);
      let ultimoindice = listaNodos['dato'].length - 1;
      console.log(ultimoindice);
      for (let i = 0; i < listaNodos["indiceR"].length; i++) {
        if (listaNodos["indiceR"].length - 1 == i) {
          listaNodos["indiceR"][i] = "R";
        }
      }
      if (contenedorLista.children.length == 2) {
        inicio.style.display = "block";
      }
      vaciarLista();
      crearLista();

      ultimoindice = listaNodos['dato'].length - 1;

      let nodoOpacidad1 = document.querySelector(`.nodo-${ultimoindice}`);

      nodoOpacidad1.style.opacity = "0.4";
      setTimeout(() => {
        obtenerArrayLista("dato").pop();
        obtenerArrayLista("indiceL").pop();
        obtenerArrayLista("indiceW").pop();
        obtenerArrayLista("indiceR").pop();
        obtenerArrayLista("indiceQ").pop();
        vaciarLista();
        if (obtenerArrayLista("dato").length > 0) {
          crearLista();
        }
        if (obtenerArrayLista("dato").length == 0) {
          inicio.style.display = "block";
          let borrarNullPrev = document.querySelector(".nullprev");
          borrarNullPrev.style.display = "none";
        }
      }, 3000);

    }

  }
});
const crearNullPre = () => {
  const items = contenedorNodos.children;
  for (let item of items) {
    if (item.classList.contains("nullprev")) {
      contenedorNodos.removeChild(item);
    }
  }
  let nullPrev = document.createElement("DIV");
  nullPrev.classList.add("nullprev");
  nullPrev.textContent = "null";
  contenedorLista.before(nullPrev);
}
const contarElementos = () => {
  return [...contenedorLista.childNodes].length;
}
const borrarRyQyW = () => {
  for (let i = 0; i < listaNodos["indiceR"].length; i++) {
    listaNodos["indiceR"][i] = "";
  }
  for (let i = 0; i < listaNodos["indiceQ"].length; i++) {
    listaNodos["indiceQ"][i] = "";
  }
  for (let i = 0; i < listaNodos["indiceW"].length; i++) {
    listaNodos["indiceW"][i] = "";
  }
}
const temporizadorMensaje = () => {
  setTimeout(() => {
    modalFondoError.style.display = "none";
    modalFondo.style.display = "none";
  }, 1500);
}
const crearListaInicio = () => {
  validarNodos = contenedorLista.hasChildNodes();
  if (validarNodos) {
    obtenerArrayLista("dato").unshift(max.value);
    obtenerArrayLista("indiceL").unshift("L");
    obtenerArrayLista("indiceR").unshift("");
    obtenerArrayLista("indiceW").unshift("");
    obtenerArrayLista("indiceQ").unshift("Q");
    for (let i = 0; i < listaNodos["indiceL"].length; i++) {
      if (i == 0) {
        listaNodos["indiceL"][i] = "L";
      } else {
        listaNodos["indiceL"][i] = "";
      }
    }
  } else {
    obtenerArrayLista("dato").unshift(max.value);
    obtenerArrayLista("indiceL").unshift("L");
    obtenerArrayLista("indiceR").unshift("");
    obtenerArrayLista("indiceW").unshift("");
    obtenerArrayLista("indiceQ").unshift("Q");

  }

  inicio.style.display = "none";

}

const crearListaFinal = () => {
  let validarNodos = contenedorLista.hasChildNodes();
  if (!validarNodos) {
    crearListaInicio();
  } else {
    obtenerArrayLista("dato").push(max.value);
    obtenerArrayLista("indiceL").push("");
    obtenerArrayLista("indiceW").push("");
    obtenerArrayLista("indiceR").push("");
    obtenerArrayLista("indiceQ").push("Q");
    obtenerArrayLista("indiceR").splice((listaNodos["dato"].lastIndexOf(max.value)) - 1, 1, "R");
  }
}

const obtenerArrayLista = (valor) => {
  return listaNodos[valor];
}

const vaciarLista = () => {
  let nodos = document.querySelectorAll(".nodo");
  let flechaContenedor = document.querySelectorAll(".flechaContenedor");
  const flechasBorrar = contenedorLista.children;
  for (let item of flechasBorrar) {
    if (item.classList.contains("flecha") || item.classList.contains("flechaPrev")) {
      contenedorLista.removeChild(item);
    }
  }
  for (let nodo of nodos) {
    contenedorLista.removeChild(nodo);
  }
  for (let ItemflechaContenedor of flechaContenedor) {
    contenedorLista.removeChild(ItemflechaContenedor);
  }
  modalFondo.style.display = "none";
}

const crearLista = () => {
  for (let i = 0; i < listaNodos["dato"].length; i++) {

    NodosIndice = document.createElement("DIV");
    NodosIndice.classList.add("nodosIndice");

    NodoL = document.createElement("DIV");
    NodoL.textContent = `${listaNodos['indiceL'][i]}`;
    NodoL.classList.add(`indiceL-${i}`);

    NodoR = document.createElement("DIV");
    NodoR.textContent = `${listaNodos['indiceR'][i]}`;
    NodoR.classList.add(`indiceR`, `indiceR-${i}`);

    NodoW = document.createElement("DIV");
    NodoW.textContent = `${listaNodos['indiceW'][i]}`;
    NodoW.classList.add(`indiceW-${i}`);

    NodosIndice.appendChild(NodoW);
    NodosIndice.appendChild(NodoR);
    NodosIndice.appendChild(NodoL);

    prev = document.createElement("DIV");
    prev.innerHTML = "p<br>r<br>e<br>v";
    prev.classList.add("prev", `prev-${i}`);

    dato = document.createElement("DIV");
    dato.textContent = listaNodos["dato"][i];
    dato.classList.add("dato");

    next = document.createElement("DIV");
    next.innerHTML = "n<br>e<br>x<br>t";
    next.classList.add("next", `next-${i}`);

    NodoContenedor = document.createElement("DIV");
    NodoContenedor.classList.add("nodosContenedor");
    NodoContenedor.appendChild(prev);
    NodoContenedor.appendChild(dato);
    NodoContenedor.appendChild(next);

    flecha = document.createElement("DIV");
    flecha.innerHTML = "&#8594; ";
    flecha.classList.add(`flecha-${i}`, "flecha");

    flechaPrev = document.createElement("DIV");
    flechaPrev.innerHTML = "&#8592 ";
    flechaPrev.classList.add(`flechaPrev-${i}`, "flechaPrev");

    flechaContenedor = document.createElement("DIV");
    flechaContenedor.classList.add(`flechaContenedor`);
    flechaContenedor.appendChild(flecha);
    flechaContenedor.appendChild(flechaPrev);

    nodo = document.createElement("DIV");
    nodo.classList.add("nodo", `nodo-${i}`);
    nodo.appendChild(NodosIndice);
    nodo.appendChild(NodoContenedor);

    contenedorQ = document.createElement("DIV");
    contenedorQ.textContent = listaNodos["indiceQ"][i];
    contenedorQ.classList.add("contenedorQ");
    nodo.appendChild(contenedorQ);

    contenedorLista.appendChild(nodo);
    contenedorLista.appendChild(flechaContenedor);
  }
  contenedorLista.removeChild(contenedorLista.lastElementChild);
  firstElement = contenedorLista.firstElementChild;
  lastElement = contenedorLista.lastElementChild;
  firstElement.before(flechaPrev);
  lastElement.after(flecha);
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
  limites.value = "";
}







