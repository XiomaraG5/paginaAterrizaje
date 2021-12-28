const nav = document.getElementById(`nav-bar`)
const ul = document.querySelector(`.ul`)

const menu = document.querySelector(`.icono`)
menu.addEventListener(`mouseover`,(e)=>{
    e.preventDefault()
    ul.style.display = "block";
    
    ul.addEventListener(`mouseleave`,()=>{
        ul.style.display = "none";
    })
    
})

