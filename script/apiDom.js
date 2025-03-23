/*-- Js pour l'affichage des résultat de L'API Score'n'co --*/

/*-- Varibles Btn et Div de l'API --*/

const btnMatch = document.querySelector(".match");
const btnClassement = document.querySelector(".classement");
const apiMatch = document.querySelector(".apiMatch");
const apiClassement = document.querySelector(".apiClassement");

/*-- Event --*/

btnMatch.addEventListener("click", () => {
  apiMatch.classList.add("active");
  apiClassement.classList.remove("active");
});

btnClassement.addEventListener("click", () => {
  apiClassement.classList.add("active");
  apiMatch.classList.remove("active");
});
