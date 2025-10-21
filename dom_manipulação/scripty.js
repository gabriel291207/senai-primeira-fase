function mostrarMensagem(){
    alert("mensagem")
    alert("outra mensagem")
}


function executarExercicio(){
    // let nome = prompt("Qual seu nome?")
    // alert("Olá " + nome)
    let nome = document.getElementById("entrada").value
    document.getElementById("resultado").innerHTML = "Olá " + nome 
}


function efetuarLogin(){
    let resultado = document.getElementById("resultadoLogin")
    console.log("resultado")


    let user = document.getElementById("username").value
    if(user == "Gabriel"){
        resultado.innerHTML = "credenciais corretas"
        // alert("Login com sucesso")
    }else{
        resultado.innerHTML = "credenciais incorretas"
        // alert("Credenciais incorretas")
    }
}