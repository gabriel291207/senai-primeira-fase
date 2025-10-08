 const numeros = [10,12,21,29]

 const usuarios = [
    {nome:"gabriel",idade: 17},
    {nome:"amabili",idade: 17},
    {nome:"joão",idade: 18}
 ]
 //const valoresDobrados = numeros.map((valor) => valor*2)
//  console.log(numeros)
//  console.log(valoresDobrados)

const nomeUsuarios = usuarios.map(usuario => usuario.nome)
for(let nome of nomeUsuarios){
    console.log(nome )
}

const idadeUsuarios = usuarios.map(usuario => usuario.idade)
for(let idade of idadeUsuarios){
    console.log(idade)
}
