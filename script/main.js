let btns = [...document.getElementsByClassName("botoes")]
let ifr = [...document.getElementsByTagName("iframe")][0]

const plantacao = "Plantação👇"
const trabalhador = "Trabalhadores👇"

btns[0].addEventListener("click", ()=>{
    btns[1].innerHTML = trabalhador
    troca(btns[0], plantacao)
})
btns[1].addEventListener("click", ()=>{
    btns[0].innerHTML = plantacao
    troca(btns[1], trabalhador)
})


function troca(btn, newName){
    if(ifr.style.display == "none"){
        ifr.style.display = "block"
        btn.innerHTML = "Fechar	❌"
    }
    else{
        ifr.style.display = "none"
        btn.innerHTML = newName
    }
}
