const prompt = require ("prompt-sync")()
const notaFinal = parseFloat(prompt ("Digite sua nota final: "))
const frequencia = parseFloat(prompt("Digite sua frequência: "))
if(notaFinal >= 7 && frequencia > 8){
    console.log("Você foi provado!")
}else{
    console.log("Reprovado!")
}