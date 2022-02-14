const arrows = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const totalItems = movielists[i].querySelectorAll("img").length;
  let counter = 0;
  arrow.addEventListener("click", () => {
    const ratio= Math.floor(window.innerWidth/270);
    counter++;
    if (totalItems - (4 + counter) +(4 - ratio) >= 0) {
      movielists[i].style.transform = `translateX(${
        movielists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielists[i].style.transform = "translateX(0)";
      counter = 0;
    }
  });
});

const ball= document.querySelector(".toggle-ball");
const items= document.querySelectorAll(".toogle, .left-menu-icon, .navbar-container, movie-list-title, .container, .sidebar");

ball.addEventListener("click",()=>{
  items.forEach(item=>{
    item.classList.toggle("active")  
  })
  ball.classList.toggle("active")
});