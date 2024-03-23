window.addEventListener("scroll", () => {
    console.log("scrolling");
    const barraLateral = document.getElementById("barra-lateral");
    barraLateral.classList.toggle("scroll", window.scrollY > 0);
});
