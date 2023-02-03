// const titulo = document.getElementById("titulo");

// function hacerClick() {
//   alert("hiciste click");
// }
// titulo.addEventListener("click", hacerClick);

// const input = document.getElementById("inputChange");

// input.addEventListener("focus", () => {
//   input.className = "yellow";
//   console.log("foco");
// });

// input.addEventListener("blur", () => {
//   input.className = "";
//   console.log("dejo el foco");
// });

// input.addEventListener("change", mostrarChangeAlert);

// function mostrarChangeAlert(event) {
//   console.log(event.target.value);
// }

// const image = document.getElementById("image");
// const ocultar = document.getElementById("ocultarImagen");
// const mostrar = document.getElementById("mostrarImagen");

// ocultar.addEventListener("click", () => {
//   image.style.display = "none";
// });

// mostrar.addEventListener("click", () => {
//   image.style.display = "block";
// });

// const btnToggle = document.getElementById("btnToggle");

// btnToggle.addEventListener("click", () => {
//   image.classList.toggle("ocultar");
// });

/* const input = document.getElementById("keyword");
 */
/* input.addEventListener("keydown", (event) => {
  console.log(event.target.value);
}); */
// input.addEventListener("keyup", (event) => {
//   if (event.code == "Enter") {
//     console.log(event.target.value);
//   }
// });
// const resultado = document.getElementById("resultado");
// const aumentar = document.querySelector(".btn-aumentar");
// const disminuir = document.querySelector(".btn-disminuir");
// const reset = document.querySelector(".btn-resetear");

// let contador = 0;
// aumentar.addEventListener("click", () => {
//   contador++;
//   resultado.textContent = contador;
// });
// disminuir.addEventListener("click", () => {
//   contador--;
//   resultado.textContent = contador;
// });

// reset.addEventListener("click", () => {
//   contador = 0;
//   resultado.textContent = contador;
// });

const formulario = document.getElementById("formulario");
const contenedor = document.getElementById("contenedor");

console.log(formulario);

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  contenedor.innerHTML += `<div class="nuevaTarea">${formulario[1].value}<div/>`;
});
