programa {
  funcao inicio() {
    inteiro vitorias
    inteiro empates
    inteiro pontos
    inteiro derrotas


    escreva("Digite o número de vitórias: ")
    leia(vitorias)
    escreva("Digite o número de empates: ")
    leia(empates)
    // escreva("Digite o número de derrotas: ")
    // leia(derrotas)
    pontos = vitorias*3 empates - derrotas
    escreva("Seus pontos são: " + pontos)
  }
}
