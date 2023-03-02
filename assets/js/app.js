let imgs = document.querySelectorAll(".item");

imgs.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".item.active").classList.remove("active");
        item.classList.add("active");
    });
});
