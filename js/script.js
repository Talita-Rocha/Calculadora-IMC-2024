// let nome = 'Maria';

// let nome = 'João';

// ao contrário do var, ao criar outro let dará erro, pois não permite rededlarar uma variável já declarada.

// não podemos redeclarar uma variável, mas podemos alterar o valor dela  

// alert(nome);

// let total = 80;

// alert(total);


// outro exemplo

// total = total + 50;
// alert (total)

// let total;

// total = 50;
// total = 10;

// outro exemplo

// let email = 'MARIA@GMAIL.COM';

// email = email.toLowerCase();

// alert(email);

// const formula = a*b / c; 

// armazena um valor que não podera ser modificado

// utilizado para declarar uma varíavel do html que não será modificada, como uma classe. 

const info = document.querySelector('.info');
const btnInfo = document.querySelector('.info button');

//pode ficar acima ou abaixo que verificará de qualquer forma
//se o usuário já fechou o info, esconde a div info.
if (localStorage.getItem('fechouInfo') == 'sim') {
    info.style.display = 'none';
}

function fecharInfo() {
    // alert('Fechou Info');
    info.style.display = 'none'; //css via js - apenas esconde

    //Armazenamento de dados no STORAGE:
    // sessionStorage - guarda dados enquanto o usuário navega na página, mas quando fecha a página, os dados somem;  
    // enquanto navega na página, mas abre novamente ao sair e voltar;
    // sessionStorage.setItem('time', 'flamengo');

    // localStorage - guarda dados no computador, mantem armazenado mesmo com o fechamento do browser. 
    // após fechar um única vez a página;
    //Não funciona no modo anônimo;
    localStorage.setItem('fechouInfo', 'sim');
}

btnInfo.addEventListener('click', fecharInfo);

// permite reutilizar a função para outra variável
// btnInfo2.addEventListener('click', fecharInfo);

//CÁLCULO DO IMC
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnImc = document.querySelector('#btn-imc');
const result = document.querySelector('#result');

function calcularImc() {
    // alert('imc');

    //1º verificar SE os valores de peso e altura foram preenchidos
    //console.log(peso.value);

    if (peso.value != '' && altura.value != '') {
        // alert('ok');

        let imc = peso.value / (altura.value * altura.value);
        // peso.value = ''; para limpar o campo após o cálculo
        // altura.value = ''; para limpar o campo após o cálculo
        let classificacao;
        let cor;

        //verificando a classificação
        if (imc < 18.5) {
            classificacao = 'Baixo peso';
            cor = '#78A4C7'; //azul claro
        }

        else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = 'Peso normal';
            cor = '#7AA47F'; //verde claro
        }

        else if (imc >= 25 && imc <= 29.9) {
            classificacao = 'Excesso de peso';
            cor = '#E5C652'; //amarelo
        }

        else if (imc >= 30 && imc <= 34.9) {
            classificacao = 'Obesidade';
            cor = '#C1741E'; //laranja
        }

        else {
            classificacao = 'Obesidade extrema';
            cor = '#E40909'; //vermelho
        }

        // alert(imc);
        result.style.display = 'block'; //exibir a div
        result.style.backgroundColor = cor;
        result.innerHTML = 'O seu IMC é: ' + imc.toFixed(2) + '<br>Classificação: ' + classificacao; //escrevendo na div

    } else {
        alert('Preencha todos os campos!');
    }
}

btnImc.addEventListener('click', calcularImc);