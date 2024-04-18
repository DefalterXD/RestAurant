const foodMoreWindow = document.querySelector("#food_more_desc");
const moreCloseButton = document.querySelectorAll("#close");
const foodMoreButton = document.querySelectorAll("#more");

foodMoreButton.forEach((button) => {
    button.addEventListener("click", () => {
        foodMoreWindow.style.display = "flex";
    }); 
});
    


moreCloseButton.forEach((button) => {
    button.addEventListener("click", () => {
    foodMoreWindow.style.display = "none";
    });
});
