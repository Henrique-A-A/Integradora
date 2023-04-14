let botao = document.querySelector('.btn__buscar')

botao.addEventListener("click", function (evento) {

   let url = window.location.pathname
   url = url.substring(0, url.length - 10)

   evento.preventDefault()

   if (pegarValor() == "home" || pegarValor() == "principal") {
      window.location.assign(url + "index.html")
   }
   else if (pegarValor() == "ods") {
      window.location.assign(url + "pagi2.html")
   }
   else if (pegarValor() == "6ods" || pegarValor() == "6 ods") {
      window.location.assign(url + "pagi3.html")
   }
   else if (pegarValor() == "solucao") {
      window.location.assign(url + "pagi4.html")
   }

   document.querySelector('.input__buscar').value = ""

})

//----------------------------------Pega Valor Do Input De Busca------------------------------------------

function pegarValor() {
   let input = document.querySelector('.input__buscar')
   let info = input.value.toLowerCase()

   return info
}