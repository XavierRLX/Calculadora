
function insert (num) {
  var numero = document.getElementById('res').innerHTML;
  document.getElementById('res').innerHTML = numero + num;
}

function clean(){
    document.getElementById('res').innerHTML = ""
}
function back(){
    var resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length - 1)
}
function calcular() {
    var resultado = document.getElementById("res").innerHTML.trim();
    if (resultado) {
      var historico = document.getElementById("historico");
      var novoResultado = eval(resultado);
      if (/[\+\-\*\/]/.test(resultado)) { // verifica se há algum símbolo //
        historico.innerHTML += resultado + " = " + novoResultado + "<br>"; // Gera o historico //
      }
      document.getElementById("res").innerHTML = novoResultado;
    } else {
      document.getElementById("res").innerHTML = "0";
    }
  }

  function mostrarHistorico() {
    var historico = document.getElementById("historico");
    if (historico.style.display === "none") {
      historico.style.display = "block";
    } else {
      historico.style.display = "none";
    }
  }
  
  document.getElementById("btnHistorico").addEventListener("click", mostrarHistorico);

  
