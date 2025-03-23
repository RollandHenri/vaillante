/*-- Script pour le Carousel des équipes --*/

export {};

/*-- Varibles catégorie --*/

const u9f1 = document.querySelector(".u9f1");
const u9m2 = document.querySelector(".u9m2");
const u9m1 = document.querySelector(".u9m1");
const u11f2 = document.querySelector(".u11f2");
const u11f1 = document.querySelector(".u11f1");
const u11m2 = document.querySelector(".u11m2");
const u11m1 = document.querySelector(".u11m1");
const u13f1 = document.querySelector(".u13f1");
const u13m1 = document.querySelector(".u13m1");
const u15m2 = document.querySelector(".u15m2");
const u15m1 = document.querySelector(".u15m1");
const u18m2 = document.querySelector(".u18m2");
const u18m1 = document.querySelector(".u18m1");
const seniorF1 = document.querySelector(".seniorF1");
const seniorM2 = document.querySelector(".seniorM2");
const seniorM1 = document.querySelector(".seniorM1");

/*-- Varible innerHTML --*/

const imgContainer = document.querySelector(".teamContainerCarousel");

/*-- Event au Click --*/

u9f1.addEventListener("click", (e) => {
  imgContainer.innerHTML = `
    <img src="/public/img/teamCarousel/pic1.webp" alt="" />
  `;
});

u9m2.addEventListener("click", () => {
  imgContainer.innerHTML = `
      <img src="/public/img/teamCarousel/pic2.webp" alt="" />
    `;
});

u9m1.addEventListener("click", () => {
  imgContainer.innerHTML = `
       <img src="/public/img/teamCarousel/pic3.webp" alt="" /> 
    `;
});

u11f2.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic4.webp" alt="" /> 
      `;
});

u11f1.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic5.webp" alt="" /> 
      `;
});

u11m2.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic6.webp" alt="" /> 
      `;
});

u11m1.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic7.webp" alt="" /> 
      `;
});

u13f1.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic8.webp" alt="" /> 
      `;
});

u13m1.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic1NB.jpg" alt="" />
      `;
});

u15m2.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic2NB.jpg" alt="" /> 
      `;
});

u15m1.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic3NB.jpg" alt="" /> 
      `;
});

u18m2.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic4NB.jpg" alt="" /> 
      `;
});

u18m1.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic5NB.jpg" alt="" /> 
      `;
});

seniorF1.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic6NB.jpg" alt="" /> 
      `;
});

seniorM2.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic7NB.jpg" alt="" /> 
      `;
});

seniorM1.addEventListener("click", () => {
  imgContainer.innerHTML = `
         <img src="/public/img/teamCarousel/pic8NB.jpg" alt="" /> 
      `;
});
