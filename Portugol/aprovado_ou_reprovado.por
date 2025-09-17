programa {
  funcao inicio() {
    cadeia nome
    real nota1, nota2, nota3, media, frequencia
    nota1 = 7
    nota2 = 7
    nota3 = 7
    media = (nota1 + nota2 + nota3) / 3
    frequencia = 0.3
    escreva(media , "\n")
    escreva(frequencia , "\n")
    se (media >= 7 e frequencia >= 0.7) {
      escreva ("APROVADO")
    } senao {
      escreva ("REPROVADO")
    }
  }
}
