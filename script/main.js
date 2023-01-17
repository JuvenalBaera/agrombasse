let btns = [...document.getElementsByClassName("botoes")]
let ifr = [...document.getElementsByTagName("iframe")][0]

const plantacao = "Plantação👇"
const equipe = "Equipe👇"

btns[0].addEventListener("click", ()=>{
    btns[1].innerHTML = equipe
    troca(btns[0], plantacao)
})
btns[1].addEventListener("click", ()=>{
    btns[0].innerHTML = plantacao
    troca(btns[1], equipe)
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
