const foodMoreWindow = document.querySelector("#food_more_desc");
const moreCloseButton = document.querySelector("#close");
const foodMoreButton = document.querySelector("#more");

foodMoreButton.addEventListener("click", () => {
    foodMoreWindow.style.display = "flex";
    
});


moreCloseButton.addEventListener("click", () => {
    foodMoreWindow.style.display = "none";
});
