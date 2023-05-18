// ---------- CRIAÇÃO DAS FUNÇÕES TOOGLEPOPUP ---------- //
function tooglePopup(input, label) {
    input.addEventListener('click',()=>{
        label.classList.add('required-popup');
    })
    
    input.addEventListener('blur',()=>{
        label.classList.remove('required-popup');
    }) 
}


// ---------- VALIDAÇÃO USERNAME ---------- //
const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");

usernameInput.addEventListener('change', (event) => {
    const value = event.target.value;

    if (value.length <=3) {
        usernameInput.classList.remove('correct');
        usernameInput.classList.add('error');
        usernameHelper.innerText = 'Username precisa ter mais de 3 caracteres';
        usernameHelper.classList.add('visible');
        inputsCorretos.username = false        
    } else {
        usernameInput.classList.remove('error');
        usernameInput.classList.add('correct');
        usernameHelper.classList.remove('visible');
        inputsCorretos.username = true 
    }
})

// ---------- VALIDAÇÃO E-MAIL ---------- //
const emailInput = document.getElementById("email");
const emailLabel = document.querySelector('label[for="email"]');
const emailHelper = document.getElementById("email-helper");

emailInput.addEventListener('input', (event) => {
    const value = event.target.value;

    if (value.includes('@') && value.includes('.com')) {
        emailInput.classList.remove('error');
        emailInput.classList.add('correct');
        emailHelper.classList.remove('visible');
        inputsCorretos.email = true
    } else {
        emailInput.classList.remove('correct');
        emailInput.classList.add('error');
        emailHelper.innerText = 'O email precisa incuir um "@" e um ".com"';
        emailHelper.classList.add('visible');
        inputsCorretos.email = false
    }
})

// ---------- VALIDAÇÃO IDADE ---------- //
const idadeInput = document.getElementById("idade");
const idadeLabel = document.querySelector('label[for="idade"]');
const idadeHelper = document.getElementById("idade-helper");

idadeInput.addEventListener("blur", (event) => {
    const valor = event.target.value

    if (valor < 18){
        idadeInput.classList.remove('correct');
        idadeInput.classList.add('error');
        idadeHelper.innerText = 'Só pode se cadastrar quem possuir a partir de 18 anos';
        idadeHelper.classList.add('visible')
        inputsCorretos.idade = false
    } else {
        idadeInput.classList.remove('error');
        idadeInput.classList.add('correct');
        idadeHelper.classList.remove('visible')
        inputsCorretos.idade = true
    }
})

// ---------- VALIDAÇÃO SENHA ---------- //
const senhaInput = document.getElementById("senha");
const senhaLabel = document.querySelector('label[for="senha"]');
const senhaHelper = document.getElementById("senha-helper");

senhaInput.addEventListener("blur", (event) => {
    const valor = event.target.value

    if (valor == ""){
        senhaInput.classList.remove('correct');
        senhaInput.classList.add('error');
        senhaHelper.innerText = 'O campo senha não pode ficar vazio';
        senhaHelper.classList.add('visible')
        inputsCorretos.senha = false
    } else {
        senhaInput.classList.remove('error');
        senhaInput.classList.add('correct');
        senhaHelper.classList.remove('visible')
        inputsCorretos.senha = true
    }
})


// ---------- VALIDAÇÃO CONFIRMA-SENHA ---------- //
const confirmaSenhaInput = document.getElementById("confirma-senha");
const confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
const confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

confirmaSenhaInput.addEventListener("blur", (event) => {
    const valorConfirmaSenha = event.target.value

    if (valorConfirmaSenha == senhaInput.value){
        confirmaSenhaInput.classList.remove('error');
        confirmaSenhaInput.classList.add('correct');
        confirmaSenhaHelper.classList.remove('visible');
        inputsCorretos.confirmaSenha = true
    } else {
        confirmaSenhaInput.classList.remove('correct');
        confirmaSenhaInput.classList.add('error');
        confirmaSenhaHelper.innerText = 'As senhas precisam ser iguais';
        confirmaSenhaHelper.classList.add('visible');
        inputsCorretos.confirmaSenha = false
    }
})


// ---------- EVITAR ENVIO DO FORMULARIO ---------- //
const btnSubmit = document.querySelector('button[type="submit"]')
const inputsCorretos = {
  username: false,
  email: false,
  idade: false,
  senha: false,
  confirmaSenha: false
}

  btnSubmit.addEventListener("click", (event)=>{
    if(inputsCorretos.username == false ||
      inputsCorretos.email == false ||
      inputsCorretos.idade == false ||
      inputsCorretos.senha == false ||
      inputsCorretos.confirmaSenha == false){
      event.preventDefault();
      alert("Todos os campos obrigatórios precisam sem preenchidos corretamente!");
    }else{
      alert("O formulário foi enviado com sucesso!");
    }
  } )

// ---------- CHAMADA DOS TOOGLEPOPUP ---------- //
tooglePopup(usernameInput, usernameLabel);
tooglePopup(emailInput, emailLabel);
tooglePopup(idadeInput, idadeLabel);
tooglePopup(senhaInput, senhaLabel);
tooglePopup(confirmaSenhaInput, confirmaSenhaLabel);
