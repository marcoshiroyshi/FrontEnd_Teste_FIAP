const accordionContent = document.querySelectorAll(".accordion");

accordionContent.forEach((item, index) => {
    let header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelectorAll(".matriz-descricao");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`;
         }else{
            description.style.height = "0px";
         }
    })
    console.log(item)
})