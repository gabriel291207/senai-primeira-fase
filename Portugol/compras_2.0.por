programa {
  funcao inicio() {
    real conta, cafe, coxinha, halls, doceDeLeite
    escreva("Preço do café: R$")
    leia(cafe)
    escreva("Preço da coxinha: R$")
    leia(coxinha)
    escreva("Preço do halls: R$")
    leia(halls)
    escreva("Preço do doce de leite: R$")
    leia(doceDeLeite)
    conta = 2*cafe + coxinha + halls + doceDeLeite
    escreva("Total a Pagar: R$" + conta)
  }
}
