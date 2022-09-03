const letterChng = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const textoIngresado = document.getElementById("textoingresado");
const textoAPoner = document.getElementById("textoAPoner");
const contenidos1 = document.getElementById("contenidosDerecha1");
const contenidos2 = document.getElementById("contenidosDerecha2");
const cont2None = (contenidos2.style.display = "none");
const keysLetterChng = Object.keys(letterChng);
const valuesLetterChng = Object.values(letterChng);
const arrayLetterChng = Object.entries(letterChng);

window.onload = textoIngresado.focus();
window.onload = carNoValidos();

function carNoValidos() {
  const textoIngresado = document.getElementById("textoingresado");
  textoIngresado.addEventListener("keyup", (e) => {
    let expRegu = /[A-ZÑáéíóú@!"#$%&()=?¡¨*;:_,.`´|^~°¬{}+¿'\\\[\]\-]/g;
    let valorInput = e.target.value;
    if (expRegu.test(valorInput)) {
      textoIngresado.value = valorInput.replace(expRegu, "");
      swal(
        "!No uses caracteres inválidos!",
        "Sólo letras minúsculas y sin acento",
        "error"
      ).then((willDelete) => {
        if (willDelete) {
          textoIngresado.focus();
        }
      });
    }
  });

}
function encriptar() {
  videoPop();
  animar();
  if (cont2None) {
    contenidos1.style.display = "none";
    contenidos2.style.removeProperty("display");
  }
  let textoEncriptado1 = textoIngresado.value;
  let textoEncriptado2 = [];
  for (let i = 0; i < textoEncriptado1.length; i++) {
    textoEncriptado2.push(textoEncriptado1[i]);
    for (let x = 0; x < keysLetterChng.length; x++) {
      if (textoEncriptado1[i] == keysLetterChng[x]) {
        textoEncriptado2.pop();
        textoEncriptado2.push(valuesLetterChng[x]);
      }
    }
  }
  textoEncriptado2 = textoEncriptado2.join("");
  textoAPoner.value = textoEncriptado2;
}

function desencriptar() {
  videoPop();
  animar();
  let textoNuevo = textoIngresado.value;
  if (cont2None) {
    contenidos1.style.display = "none";
    contenidos2.style.removeProperty("display");
  }
  for (let z = 0; z < arrayLetterChng.length; z++) {
    if (textoNuevo.includes(arrayLetterChng[z][1])) {
      textoNuevo = textoNuevo.replaceAll(
        arrayLetterChng[z][1],
        arrayLetterChng[z][0]
      );
    }
  }
  textoAPoner.value = textoNuevo;
}

function copiar() {
  let textoIngresado = document.getElementById("textoingresado");
  let textoAPoner = document.getElementById("textoAPoner");
  textoAPoner.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  let mostrar = setInterval(() => {
    swal("! TEXTO COPIADO ¡", "", "success").then((willDelete) => {
      if (willDelete) {
        textoIngresado.focus();
      }
    });
    clearInterval(mostrar);
  }, 0);
}

function animar() {
  textoAPoner.classList.toggle("animacionTxt");
  document.getElementById("derecha").classList.remove("animacion");
  document.getElementById("derecha").classList.toggle("animacion2");
  setTimeout(() => {
    textoAPoner.classList.toggle("animacionTxt");
    document.getElementById("derecha").classList.toggle("animacion2");
  }, 3000);
}

function videoPop() {
  let vidPlay = document.getElementById("vid");
  vidPlay.load();
  vidPlay.play();
  let videoMostra = document.getElementById("video");
  videoMostra.classList.toggle("vidMostrar");
  setTimeout(() => {
    videoMostra.classList.toggle("vidMostrar");
  }, 3000);
}