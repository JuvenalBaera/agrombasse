let btns = [...document.getElementsByClassName("botoes")]
let ifrs = [...document.getElementsByTagName("iframe")]

const plantacao = "Plantação👇"
const equipe = "Equipe👇"

btns[0].addEventListener("click", ()=>{
    btns[1].innerHTML = equipe
    troca(ifrs[1], btns[0], plantacao)
})
btns[1].addEventListener("click", ()=>{
    btns[0].innerHTML = plantacao
    troca(ifrs[1], btns[1], equipe)
})

document.getElementById("planoS").addEventListener("click", ()=>{
    troca(ifrs[0], document.getElementById("planoS"), "aqui")
})

function troca(ifr, btn, newName){
    if(ifr.style.display == "none"){
        ifr.style.display = "block"
        btn.innerHTML = "Fechar	❌"
    }
    else{
        ifr.style.display = "none"
        btn.innerHTML = newName
    }
}
