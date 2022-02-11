// case sensitive
// nome é diferente de Nome

// var: escopo global, ou seja, funciona para todos o código
// let: escopo local, ou seja, o oposto de var
// const: nunca terá o valor alterado & escopo global

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = "Nome inválido. Insira um nome com pelo menos três letras."
    }else{
        txtNome.innerHTML = "Nome válido"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
    }else{
        txtEmail.innerHTML = "E-mail válido"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres."
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Olá, " + nome.value + ". Seu e-mail foi enviado com sucesso.")
    } else{
        alert("Todos os campos precisam ser preenchidos corretamente.")
    }
}

function mapaZoom(){
mapa.style.width = "520px"
mapa.style.height = "360px"
}

function mapaNormal(){
    mapa.style.width = "320px"
    mapa.style.height = "160px"
}