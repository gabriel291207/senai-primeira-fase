const prompt = require("prompt-sync")()
const idade = prompt("Digite sua idade: ")
const cnh = prompt("Você possui cnh? (Digite sim ou não: ")
if(idade >= 18 && cnh === "sim"){
    console.log("Está autorizado a dirigir!")
}else{
    console.log("Não esta autorizado a dirigir!")
}