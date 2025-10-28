let usuario
function cadastrarUsuario(){


    usuario = document.getElementById("inputUsuario").value

    document.getElementById("inputUsuario").value = ``
    document.getElementById("resultado").innerHTML = "Usuario cadastrado com sucesso " + usuario
}



function calcularDistancia(){
    let distancia = Number(document.getElementById("inputDistancia").value)
    let combustivel = Number(document.getElementById("inputCombustivel").value)
    let consumo = (distancia/combustivel)
    // console.log(consumo)

    document.getElementById(`resultadoConsumo`).innerHTML = `o consumo foi de ${consumo} km/l.`
}



function cofrinho(){
    let produtoX = Number(document.getElementById("inputProdutoX").value)
    let moeda1 = Number(document.getElementById("inputMoeda1").value)
    let moeda050 = Number(document.getElementById("inputMoeda050").value)
    let moeda025 = Number(document.getElementById("inputMoeda025").value)
    let moeda010 = Number(document.getElementById("inputMoeda010").value)
    let moeda05 = Number(document.getElementById("inputMoeda05").value)
    let total = (moeda1 * 1) + (moeda050 * 0.50) + (moeda025 * 0.25) + (moeda010 * 0.10) + (moeda05 * 0.05)
    if(total >= produtoX){
        document(Element.getElementById)
    }
}