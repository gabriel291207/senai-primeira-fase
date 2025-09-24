const prompt = require("prompt-sync")()
const usuario = {
    nome: "",
    senha: ""
}
usuario.nome = prompt("Digite seu nome de usuário: ")
usuario.senha = prompt("Digite sua senha: ")
if(usuario.nome === "adimin" && usuario.senha === "291207"){
    console.log("Acesso permitido!")
}else{
    console.log("Acesso negado!")
}