

var mainCtn = document.getElementsByClassName("main-ctn")[0]

function scrollHandler() {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
        var myBox = document.createElement("div")
        myBox.classList.add("box")
        mainCtn.appendChild(myBox)
    }
}

window.addEventListener('scroll', scrollHandler)

