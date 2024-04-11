const header = document.getElementById("header");

window.addEventListener("scroll",(e)=>{
  header.classList.toggle("abajo",window.scrollY > 0)
})

const imgProyecto = document.getElementById("img-proyecto");

const height = imgProyecto.clientHeight;
const width = imgProyecto.clientWidth;

imgProyecto.addEventListener("mousemove", (e) => {
  const { layerX, layerY } = e;

  const yRotation = ((layerX - height / 2) / height)*7;

  const xRotation = ((layerY - width / 2) / width)*7;

  const string = `
    perspective(500px) 
    scale(1.1) 
    rotateX(${xRotation}deg) 
    rotateY(${yRotation}deg)
  `;

  imgProyecto.style.transform = string;
});

imgProyecto.addEventListener("mouseout",()=>{
  const string = `
    perspective(500px) 
    scale(1) 
    rotateX(0) 
    rotateY(0)
  `;

  imgProyecto.style.transform = string;
})

