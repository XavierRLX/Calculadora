
// função para adicionar um número ou operador ao visor da calculadora
function insert(num) {
    var numero = document.getElementById('res').innerHTML;

    // Verifica se o visor está vazio e o número ou operador é um sinal ou ponto decimal, e retorna sem fazer nada
    if (numero == '' && /[\.\+\-\*\/]/.test(num)) {
      return;
    }

    // Adiciona o número ou operador ao visor
    document.getElementById('res').innerHTML = numero + num;

    // Verifica se o último caractere é um operador e o número ou operador atual também é um operador, e substitui o último caractere pelo atual
    if (/[\+\-\*\/]/.test(numero.slice(-1)) && /[\+\-\*\/]/.test(num)) {
      document.getElementById('res').innerHTML = numero.slice(0, -1) + num;
    }
}

  function clean() {
    document.getElementById('res').innerHTML = "" // limpa o valor atual
    document.getElementById('historico').innerHTML = ""; // limpa o histórico de operações
    localStorage.removeItem('resultado'); // remove o valor atual do localStorage
    localStorage.removeItem('historico'); // remove o histórico do localStorage
}

function back() {
    var resultado = document.getElementById('res').innerHTML; // obtém o valor atual
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length - 1); // remove o último caractere
}

function calcular() {
    var resultado = document.getElementById("res").innerHTML.trim(); // obtém o valor atual, removendo espaços em branco no início e no final
    if (resultado) { // verifica se o valor atual é válido
        var historico = document.getElementById("historico"); // obtém o elemento do histórico de operações
        var novoResultado = eval(resultado); // calcula o resultado da expressão
        if (/[\+\-\*\/]/.test(resultado)) { // verifica se a expressão possui algum operador
            if (novoResultado.toString().indexOf('.') !== -1) { // verifica se o resultado possui ponto decimal
                novoResultado = novoResultado.toFixed(2); // arredonda o resultado para duas casas decimais
            }
            historico.innerHTML += resultado + " = " + novoResultado + "<br>"; // adiciona a expressão e o resultado ao histórico
        }
        document.getElementById("res").innerHTML = novoResultado; // atualiza o valor atual com o resultado
    } else {
        document.getElementById("res").innerHTML = "0"; // se o valor atual for vazio, atualiza com zero
    }
    localStorage.setItem('resultado', novoResultado); // salva o valor atual no localStorage
    localStorage.setItem('historico', historico.innerHTML); // salva o histórico de operações no localStorage
}

var resultadoSalvo = localStorage.getItem('resultado'); // obtém o valor atual salvo no localStorage
if (resultadoSalvo) {
    document.getElementById('res').innerHTML = resultadoSalvo; // se houver valor salvo, atualiza o valor atual
}
var historicoSalvo = localStorage.getItem('historico'); // obtém o histórico de operações salvo no localStorage
if (historicoSalvo) {
    document.getElementById('historico').innerHTML = historicoSalvo; // se houver histórico salvo, atualiza o histórico de operações
}

function mostrarHistorico() {
    var historico = document.getElementById("historico"); // obtém o elemento do histórico de operações
    if (historico.style.opacity === "0") { // verifica se o histórico está escondido
        historico.style.opacity = "1"; // se estiver, mostra o histórico
    } else {
        historico.style.opacity = "0"; // se não estiver, esconde o histórico
    }
}
document.getElementById("btnHistorico").addEventListener("click", mostrarHistorico); // adiciona um evento de clique ao botão de histórico  