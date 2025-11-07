const usuarios = []


function cadastrarUsuario(){
    let nomeLido = document.getElementById('inputNome').value
    let alturaLida = Number(document.getElementById('inputAltura').value)

    const informacoes = {
        nome: nomeLido,
        altura: alturaLida
    }
    usuarios.push(informacoes)

    console.log(usuarios);
    
    limparForm()
    alert("Usuario cadastrado com sucesso!")
    
}

function limparForm(){
    document.getElementById('inputNome').value = ''
    document.getElementById('inputAltura').value = ''
    
    document.getElementById('inputNome').focus()
}




function mostrarTodosUsuarios(){

    for(let i = 0; i < usuarios.length; i++){
        document.getElementById(`paineUsuarios`).innerHTML +=`
        nome: ${usuarios[i].nome} - Altura: ${usuarios[i].altura} <br>
    `
    }
}

function lancarMeeoro(){
    usuarios = []
    mostrarTodosUsuarios()
}


function navegarParaDois(){

    let nome = prompt("user: ")
    let senha = prompt("senha")

    if(nome == "admin" && senha == "admin"){
        window.location.href = `dois.html`
    }else{
        alert("voce esta tentando invadir!!")
    }

    window.location.href = `dois.html`
}