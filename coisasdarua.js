let buttonMenu = document.getElementById('button-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('hoverlay-menu')

buttonMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
