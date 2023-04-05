var switchBtn = document.getElementById('switch');
var bts = document.getElementById('igual');
var todos = document.getElementById('flexbox');
var sec = document.getElementById('section');
var xs = document.getElementById('x');
var tela = document.getElementById('resposta');
var re = document.getElementById('res');
var corp = document.getElementById('corpo');

function temaEscuro() {
  bts.style.backgroundColor = '#f50d0d';
  todos.style.backgroundColor = '#3737f3';
  sec.style.backgroundColor = '#c8c8d8';
  re.style.backgroundColor = '#c8c8d8';
  tela.style.backgroundColor = '#c8c8d8';
  re.style.textDecorationColor = '#c8c8d8';
  xs.style.textDecorationColor = '#c8c8d8';
  corp.style.backgroundColor = '#ffffff';
}

function temaClaro() {
  bts.style.backgroundColor = '#970808';
  todos.style.backgroundColor = '#1d1d99';
  sec.style.backgroundColor = '#464649';
  re.style.backgroundColor = '#464649';
  tela.style.backgroundColor = '#464649';
  re.style.textDecorationColor = '#464649';
  xs.style.textDecorationColor = 'red';
  corp.style.backgroundColor = '#343a4b';
}

switchBtn.addEventListener("change", function() {
  if (this.checked) {
    temaEscuro();
  } else {
    temaClaro();
  }
});