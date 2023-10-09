const form = document.querySelector("form")
const rep = document.querySelector("h3")

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    
    const nome = form.inNome.value
    const masculino = form.inMasculino.cheked
    const altura = Number(form.inAltura.value)
    
   let peso
    if(masculino){
        peso = 22* Math.pow(altura, 2)
    }   else{
        peso = 21* Math.pow(altura, 2)
    }
    resp.innerText= `${nome} seu peso ideal é: ${peso.toFixed(3)} kg`
   })

form.addEventListener("reset", (e) =>{
    resp.innerText = " "
})

