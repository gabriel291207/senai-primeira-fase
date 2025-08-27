programa {

  funcao logico senhaValida(cadeia senha) {
    se(senha == "291207") {
      retorne verdadeiro
    } senao {
      retorne falso
    }
  }
  
  funcao inicio() {
    cadeia senha 
    escreva("Digite a senha: ")
    leia(senha)
    se(senhaValida(senha)){
      escreva("Acesso Válido")
      } senao {
      escreva("Acesso Negado")
    }
  }
}
