"use strict";

//Loading content

window.onload = function () {
  // Lista de urls que deseas precargar
  const LIST_IMAGES_PRELOAD = Array.from(document.images);
  // Elemento visual del loading
  const LOADING = document.querySelector(".loading");
  // Tiempo de espera entre revisiones en ms
  const SLEEP_CHECK = 50;

  // Herramienta para esperar un tiempo determinado en una función asíncrona

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Comprueba de forma recursiva si todas las imágenes se han completado
  // Si todas estan descargadas, quitará la clase 'loading--show' a 'loading' para ocultarlo

  async function checkIfAllImagesCompleted() {
    // Obtiene todas las imágenes sin completar
    const NO_COMPLETES = LIST_IMAGES_PRELOAD.filter((img) => {
      return !img.complete;
    });

    if (NO_COMPLETES.length !== 0) {
      // Vuelve a iterar si existe alguna sin completar
      await sleep(SLEEP_CHECK);
      return checkIfAllImagesCompleted();
    } else {
      // Oculta el loading
      LOADING.classList.remove("loading--show");
    }
    return true;
  }

  // Inicia

  checkIfAllImagesCompleted();
};

//Popup
const openPopup = document.querySelector(".item-contact");
const popup = document.querySelector(".popup");

openPopup.addEventListener("click", function () {
  popup.style.visibility = "visible";
});

popup.addEventListener("click", function (e) {
  e.stopPropagation();

  if (e.target === e.currentTarget) {
    popup.style.visibility = "hidden";
  }
});

const openSites = document.querySelector(".open-sites__btn");
const sitesView = document.querySelector(".sites");
const closeSitesFLV = document.querySelector(".sites__content--link__flv");
const closeSitesOTA = document.querySelector(".sites__content--link__ota");
const closeSitesJK = document.querySelector(".sites__content--link__jk");

openSites.addEventListener("click", function () {
  sitesView.style.display = "flex";
});

sitesView.addEventListener("click", function (e) {
  e.stopPropagation();

  if (e.target === e.currentTarget) {
    sitesView.style.display = "none";
  }
});

closeSitesFLV.addEventListener("click", function () {
  sitesView.style.display = "none";
});
closeSitesOTA.addEventListener("click", function () {
  sitesView.style.display = "none";
});
closeSitesJK.addEventListener("click", function () {
  sitesView.style.display = "none";
});

//Scroll a sections
const home = document.querySelector(".item-home");
const homeSection = document.querySelector(".home");

const recommend = document.querySelector(".item-recommend");
const recommendSection = document.querySelector(".recommend");

const tops = document.querySelector(".item-tops");
const topsSection = document.querySelector(".tops");

home.addEventListener("click", function () {
  homeSection.scrollIntoView({ behavior: "smooth" });
});

recommend.addEventListener("click", function () {
  recommendSection.scrollIntoView({ behavior: "smooth" });
});

tops.addEventListener("click", function () {
  topsSection.scrollIntoView({ behavior: "smooth" });
});
