document.addEventListener("DOMContentLoaded", () => {
    const removeButton = document.querySelectorAll(".remove");
    const addButton = document.querySelectorAll("#add");
    const deleteButton = document.querySelectorAll("#delete");

    removeButton.forEach((button) => {
        button.addEventListener("click", () => {
            const quantityInput = button.parentElement.querySelector("#quantity");
            quantityInput.value = parseInt(quantityInput.value) - 1;
        });
    });

    addButton.forEach((button) => {
        button.addEventListener("click", () => {
            const quantityInput = button.parentElement.querySelector("#quantity");
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });
    });

    deleteButton.forEach((button) => {
        button.addEventListener("click", () => {
            const foodCard = button.closest("#food_container");
            foodCard.remove();
        });
    });
});