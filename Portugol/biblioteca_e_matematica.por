programa {

  inclua biblioteca Matematica
  funcao inicio() {
    cadeia nome
    real nota1, nota2, nota3, media, frequencia
    escreva("NOME: ")
    leia(nome)
    escreva (media)
    escreva("PRIMEIRA NOTA: ")
    leia(nota1)
    escreva("SEGUNDA NOTA: ")
    leia(nota2)
    escreva("TERCEIRA NOTA: ")
    leia(nota3)
    media = (nota1+nota2+nota3)/3
    media = Matematica.arredondar(media,2)
    escreva ("Sua média é: " + media)
    escreva("\nDe 0 a 1, digite sua frequência: ")
    leia(frequencia)
    frequencia = frequencia*100
    limpa()

    escreva(nome, " sua média final é:" + media, "\n Sua frequencia " , frequencia, "% \n")

    se(media>=7 e frequencia>=8){
    escreva("Aprovado")
    } senao{
      escreva("Reprovado")
    }
  }
}
