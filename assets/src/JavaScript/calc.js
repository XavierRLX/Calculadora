

// Função para adicionar um número ou operador ao visor da calculadora
function insert(num) {
    var visor = document.getElementById('res');
    var expressaoAtual = visor.innerHTML;

    // Verifica se o visor está vazio e o número ou operador é um sinal ou ponto decimal, e retorna sem fazer nada
    if (expressaoAtual === '' && /[\.\+\-\*\/]/.test(num)) {
        return;
    }

    // Limita o comprimento total (número digitado + resultado exibido) a 15 caracteres
    if ((expressaoAtual + num).length <= 10) {
        // Adiciona o número ou operador ao visor
        visor.innerHTML = expressaoAtual + num;
    }
}

// Função para limpar o visor e o histórico da calculadora
function clean() {
    document.getElementById('res').innerHTML = '';
    document.getElementById('historico').innerHTML = '';
    localStorage.removeItem('resultado');
    localStorage.removeItem('historico');
}

// Função para remover o último caractere do visor
function back() {
    var visor = document.getElementById('res');
    var expressaoAtual = visor.innerHTML;
    visor.innerHTML = expressaoAtual.substring(0, expressaoAtual.length - 1);
}

// Função para formatar números
function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR');
}

// Função para realizar o cálculo da expressão no visor
function calcular() {
    var resposta = document.getElementById("res");
    var expressao = resposta.innerText;

    try {
        // Avalia a expressão matemática
        var resultado = eval(expressao);

        // Verifica se o resultado é um número
        if (typeof resultado === 'number' && !isNaN(resultado)) {
            // Formata o resultado antes de exibi-lo
            var resultadoFormatado = formatarNumero(resultado);

            // Limita o resultado a 15 caracteres
            if (resultadoFormatado.length > 10) {
                resultadoFormatado = resultadoFormatado.substring(0, 15);
            }

            resposta.innerText = resultadoFormatado;

            // Adiciona a expressão e o resultado ao histórico
            var historico = document.getElementById("historico");
            historico.innerHTML += expressao + " = " + resposta.innerText + "<br>";

            // Salva o histórico no localStorage
            localStorage.setItem('historico', historico.innerHTML);
        } else {
            resposta.innerText = 'Erro';
        }
    } catch (error) {
        resposta.innerText = 'Erro';
    }
}

// Carrega o valor atual e o histórico salvos no localStorage ao carregar a página
function carregarDadosSalvos() {
    var resultadoSalvo = localStorage.getItem('resultado');
    if (resultadoSalvo) {
        document.getElementById('res').innerHTML = resultadoSalvo;
    }

    var historicoSalvo = localStorage.getItem('historico');
    if (historicoSalvo) {
        document.getElementById('historico').innerHTML = historicoSalvo;
    }
}

// Mostra ou esconde o histórico de operações
function mostrarHistorico() {
    var historico = document.getElementById("historico");
    historico.style.opacity = (historico.style.opacity === "0") ? "1" : "0";
}

// Adiciona um evento de clique ao botão de histórico
document.getElementById("btnHistorico").addEventListener("click", mostrarHistorico);


// // Adiciona um ouvinte de eventos de teclado ao documento
// document.addEventListener('keydown', function (event) {
//     // Obtém o código da tecla pressionada
//     var key = event.key;

//     // Ignora as teclas de função (F1, F2, etc.)
//     if (event.key.startsWith('F')) {
//         return;
//     }

//     // Verifica se a tecla pressionada é um número ou um dos símbolos específicos
//     if (/[\d+\-*\/]/.test(key)) {
//         event.preventDefault(); // Evita o comportamento padrão da tecla (por exemplo, evitar a entrada em um campo de texto)
//         insert(key);
//     }

//     // Se a tecla pressionada for "Backspace", chama a função back
//     if (key === 'Backspace') {
//         event.preventDefault();
//         back();
//     }

//     // Se a tecla pressionada for "Enter" ou "=", chama a função calcular
//     if (key === 'Enter' || key === '=') {
//         event.preventDefault();
//         calcular();
//     }
// });


// Carrega os dados salvos ao carregar a página
carregarDadosSalvos();
