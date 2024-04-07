const tecnos = document.querySelectorAll(".tecno");

tecnos.forEach(e => {
    const porcentElement = e.querySelector(".porcent");
    e.addEventListener("mouseenter", () => {
        porcentElement.classList.add("abajo");
    });
    e.addEventListener("mouseleave", () => {
        porcentElement.classList.remove("abajo");
    });
});
