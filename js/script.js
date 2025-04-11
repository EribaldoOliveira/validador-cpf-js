// Função principal que valida o CPF
function validarCPF() {
    let cpf = document.getElementById('cpf').value; // Pega o valor digitado no input
    cpf = cpf.replace(/\D/g, ''); // Remove tudo que não for número (letras, pontos, traços etc.)
  
    // Verifica se o CPF tem 11 dígitos ou se todos os dígitos são iguais (ex: 111.111.111-11, que é inválido)
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
      return mostrarResultado(false); // CPF inválido
    }
  
    // Validação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf[i]) * (10 - i); // Multiplica os 9 primeiros dígitos por pesos decrescentes de 10 a 2
    }
  
    let digito1 = (soma * 10) % 11;
    digito1 = (digito1 === 10 || digito1 === 11) ? 0 : digito1; // Se o resultado for 10 ou 11, vira 0
  
    if (digito1 !== parseInt(cpf[9])) return mostrarResultado(false); // Compara com o 10º dígito do CPF
  
    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf[i]) * (11 - i); // Multiplica os 10 primeiros dígitos por pesos de 11 a 2
    }
  
    let digito2 = (soma * 10) % 11;
    digito2 = (digito2 === 10 || digito2 === 11) ? 0 : digito2;
  
    // Mostra se o CPF é válido comparando com o último dígito
    mostrarResultado(digito2 === parseInt(cpf[10]));
  }
  
  // Função que mostra o resultado na tela com ícones e cores
  function mostrarResultado(valido) {
    const resultado = document.getElementById('resultado'); // Pega o elemento da div de resultado
  
    if (valido) {
      resultado.innerHTML = '<i class="fas fa-check-circle"></i> CPF Válido!';
      resultado.classList.remove("invalido"); // Remove classe de CPF inválido
      resultado.classList.add("valido"); // Adiciona classe para cor verde
    } else {
      resultado.innerHTML = '<i class="fas fa-times-circle"></i> CPF Inválido!';
      resultado.classList.remove("valido");
      resultado.classList.add("invalido");
    }
  }
  
  // Função para limpar o campo de CPF e o resultado
  function limparCampos() {
    document.getElementById('cpf').value = ''; // Limpa o input
    document.getElementById('resultado').innerHTML = ''; // Limpa a div de resultado
    document.getElementById('resultado').classList.remove("valido", "invalido"); // Remove as classes
  }
  
  // Aplica a máscara de CPF (000.000.000-00) quando a página estiver carregada
  $(document).ready(function() {
    $('#cpf').mask('000.000.000-00'); // Máscara usando jQuery Mask
  });
  