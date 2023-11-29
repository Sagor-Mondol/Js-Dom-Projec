

window.addEventListener("scroll",()=>{
    if(window.scrollY < 650){
        document.querySelector(".home h1").style.marginTop = `${window.scrollY }px`
    }else return
})