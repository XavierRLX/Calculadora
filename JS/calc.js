
function insert(num) {
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num;
}

function clean() {
    document.getElementById('res').innerHTML = ""
    document.getElementById('historico').innerHTML = "";
    localStorage.removeItem('resultado');
  localStorage.removeItem('historico');
}

function back() {
    var resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
    var resultado = document.getElementById("res").innerHTML.trim();
    if (resultado) {
        var historico = document.getElementById("historico");
        var novoResultado = eval(resultado);
        if (/[\+\-\*\/]/.test(resultado)) { // verifica se há algum símbolo //
            if (novoResultado.toString().indexOf('.') !== -1) { // verifica se o resultado contém um ponto decimal
                novoResultado = novoResultado.toFixed(2);
            }
            historico.innerHTML += resultado + " = " + novoResultado + "<br>"; // Gera o historico //
        }
        document.getElementById("res").innerHTML = novoResultado;
    } else {
        document.getElementById("res").innerHTML = "0";
    }
    // salvar o resultado atual e o histórico no localStorage
    localStorage.setItem('resultado', novoResultado);
    localStorage.setItem('historico', historico.innerHTML);
}

var resultadoSalvo = localStorage.getItem('resultado');
if (resultadoSalvo) {
    document.getElementById('res').innerHTML = resultadoSalvo;
}
var historicoSalvo = localStorage.getItem('historico');
if (historicoSalvo) {
    document.getElementById('historico').innerHTML = historicoSalvo;
}

function mostrarHistorico() {
    var historico = document.getElementById("historico");
    if (historico.style.opacity === "0") {
        historico.style.opacity = "1";
    } else {
        historico.style.opacity = "0";
    }
}
document.getElementById("btnHistorico").addEventListener("click", mostrarHistorico);
