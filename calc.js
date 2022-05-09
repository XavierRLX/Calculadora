
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
    var resultado = document.getElementById('res').innerHTML;
    if (resultado)
    {
        document.getElementById('res').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('res').innerHTML = "0"
    }
}

var temax = document.getElementById('mudar-tema')
var troca = document.getElementById('troca-tema')
var bts = document.getElementById('igual')
var todos = document.getElementById('flexbox')
var sec = document.getElementById('section')
var xs = document.getElementById('x')
var re = document.getElementById('res')
var corp = document.getElementById('corpo')

temax.addEventListener('click', clicar)
troca.addEventListener('click', trocar)

function clicar(){
    troca.style.display = 'inline'
    bts.style.backgroundColor = '#f50d0d'
    todos.style.backgroundColor = '#3737f3'
    sec.style.backgroundColor = '#c8c8d8'
    re.style.backgroundColor = '#c8c8d8'
    re.style.textDecorationColor = '#c8c8d8'
    xs.style.textDecorationColor = '#c8c8d8'
    corp.style.backgroundColor = '#ffffff'

}
function trocar(){
    troca.style.display = 'none'
    bts.style.backgroundColor = '#970808'
    todos.style.backgroundColor = '#1d1d99'
    sec.style.backgroundColor = '#464649'
    re.style.backgroundColor = '#464649'
    re.style.textDecorationColor = '#464649'
    xs.style.textDecorationColor = 'red'
    corp.style.backgroundColor = '#343a4b'
    
}
