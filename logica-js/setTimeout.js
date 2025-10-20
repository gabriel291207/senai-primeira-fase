// setTimeout(()=>{
//     console.log("Executei depois de 3 seg")
// }, 3000)

function saudacao(){
    console.log("Olá")
}

function imprimeDado(){
    console.log("Imprimir")
}

function soma(){
    console.log(5+2)
}


setTimeout(soma, 3000)
setTimeout(imprimeDado, 5000)
saudacao()