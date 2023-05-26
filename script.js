
var ini = document.getElementById('txtini')
var fim = document.getElementById('txtfim')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')

function contar(){ 

    /*Este é o erro que vai surgir caso não exista algum dos dados*/

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) 
    { window.alert('[ERRO] Faltam dados!')
    res.innerHTML = 'Impossivel Contar! Verifique os Dados.'
} else {
    res.innerHTML = 'Contagem: '
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
if(i < f){
    //Contagem crescente
    for(var c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449} `
    }
}else{ 
    //Contagem regressiva
    for(var c = i; c >= f; c-= p){
    res.innerHTML += `${c} \u{1f3c1}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
  }
} 
function reset(){
    ini.value = ""
    fim.value = ""
    passo.value = ""
    res.innerHTML = "Preparando a Contagem..."
}
 