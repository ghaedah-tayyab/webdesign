const btn = document.querySelector("#btn");
const closeIcon = document.querySelector(".closed-ion");
const trailer=document.querySelector(".tralier-container");
const videoE1=document.querySelector("video");


btn.addEventListener("click", ()=>{
    trailer.classList.remove("active");
});


closeIcon.addEventListener("click", ()=>{
    trailer.classList.add("active");
    videoE1.pause();
})