let btn = document.getElementById("btnImg") 

btn.addEventListener("click", ()=>{
    let ifr = [...document.getElementsByTagName("iframe")][0]
    if(ifr.style.display == "none"){
        ifr.style.display = "block"
        btn.innerHTML = "Fechar	❌"
    }
    else{
        ifr.style.display = "none"
        btn.innerHTML = "Imagens Aqui👇" 
    }
})