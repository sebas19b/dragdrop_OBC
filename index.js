//obtenemos los elementos desde el html con query
const parrafo = document.querySelectorAll(".parrafo");
const seccion = document.querySelectorAll(".seccion");
const imagen = document.querySelectorAll(".image");


//Cuando comienza y termina el arrastre
parrafo.forEach(p =>{
    //evento de escucha cuando comienza en arrastre
    p.addEventListener("dragstart", e =>{
        console.log('Elemento' + e.innerText)
    
        p.classList.add("dragging")
        e.dataTransfer.setData("id", p.id)

    })
    //evento de escucha cuando finaliza el arrastre
    p.addEventListener("dragend", e =>{
        p.classList.remove("dragging")

    })  
    
});

//Cuando esta siendo arrastrado d una seccion a otra

seccion.forEach(s => {
    //Registra cuando el elemento esta siendo arrastrado
    s.addEventListener("dragover", e =>{
        e.preventDefault()
    })
    //registra cuando el elemento es soltado
    s.addEventListener("drop", e =>{
        //asigna el id
        const id_p = e.dataTransfer.getData("id")
        //obtiene el id del documento
        const parrafo = document.getElementById(id_p)
        
        s.appendChild(parrafo)
    })


});

imagen.forEach(i => {

    i.addEventListener("dragover", e =>{
        e.preventDefault()
    })
    i.addEventListener("drop", e =>{
        
        const id_img = e.dataTransfer.getData("id")
        console.log(id_img)
        
        const gImg = document.getElementById(id_img)
        gImg.remove()
        //const gImg = document.getElementById(id_img)
        //i.dataTransfer.clearData(gImg)
        //i.appendChild(gImg)

    })
});