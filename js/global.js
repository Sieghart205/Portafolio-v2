const cursor = document.getElementById("cursor");

  

document.addEventListener("mousemove",e =>{
  cursor.style.setProperty("--cursor-x",e.clientX + "px")
  cursor.style.setProperty("--cursor-y",e.clientY + "px")
})

document.addEventListener("mousedown",()=>{
  cursor.style.opacity = 0.5
})

document.addEventListener("mouseup",()=>{
    cursor.style.opacity = 1
})

document.addEventListener("mouseleave",()=>{
    cursor.style.opacity = 0;
})

document.addEventListener("mouseenter",()=>{
    cursor.style.opacity = 1;
})