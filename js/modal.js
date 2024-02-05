const btn = document.querySelector(".modal-open")
const modal = document.querySelector(".modal")
const closeModal = document.querySelector(".modal-close")


btn.addEventListener("click", ()=>{
    modal.classList.remove("display-none");
    modal.classList.add("display-block");
    console.log("Ei !!!");
})


closeModal.addEventListener("click", ()=>{
    modal.classList.remove("display-block")
    modal.classList.add("display-none")
})