const button = document.querySelectorAll(".details__questioncon")

button.forEach((i)=>{
    i.addEventListener("click", () => {
        if (i.parentNode.classList.contains("details--active")) {
            i.parentNode.childNodes[3].style.height = 0
            i.parentNode.classList.remove("details--active")   
            i.firstElementChild.style.fontWeight = "" 
            i.lastElementChild.classList.remove("details__arrow--active")
        } 
        else {
            removeAll()
            let height = i.parentNode.childNodes[3].scrollHeight
            i.parentNode.childNodes[3].style.height = `${height}px`
            i.parentNode.classList.toggle("details--active")
            i.lastElementChild.classList.toggle("details__arrow--active")
            i.firstElementChild.style.fontWeight = "bold"
        }

    })
})

function removeAll () {
    button.forEach((i) => {
        i.parentNode.childNodes[3].style.height = 0
        i.parentNode.classList.remove("details--active")
        i.firstElementChild.style.fontWeight = ""
        i.lastElementChild.classList.remove("details__arrow--active")
    })
}
