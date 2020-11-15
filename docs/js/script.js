'use strict';
// debugger;
const btnMenu = document.querySelector('#btn-menu')
const a = document.getElementsByTagName('a');

document.addEventListener(`click`, (e) => {
  const origin = e.target.closest("a");
  const ancho = document.body.scrollWidth;


  console.log(`Actualente cuenta con un ancho de ${ancho}, ${origin}`);
  if ((ancho <= 750) && (origin.href.includes('Guisos') || (origin.href.includes('Ubicacion')))) {
      btnMenu.click();
  };

  if (origin) {
    //Obtenenemos todos los anchors
    for (let idx = 0; idx < a.length; ++idx) {
      // console.log(a[idx].href);
      a[idx].classList.remove("active");
    }

    // console.clear();
    console.log(`You clicked ${origin.href}`);
    origin.classList.add("active");
  }
});


const app = new Vue({
  el: "#app",
  data: {
    titulo: "Los Tacos del Gera",
    subtitulo: "Exquisitos tacos, ven y pruebalos",
    ubicacion: "Nuestra Ubicación",
    tit_guisos: "Nuestra Especialidad",
    guisos: [
      { nombre: "Barbacoa", frecuencia: "Diario" },
      { nombre: "Chicharon", frecuencia: "Diario" },
      { nombre: "Queso con Rajas", frecuencia: "Mar/Mier/Ju" },
    ],
    tel: "81 1465 7893",
  },
});
