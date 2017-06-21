var botaoEnviar = document.querySelector("#botao-enviar");
botaoEnviar.addEventListener("click", function(event){
  event.preventDefault()
  
  var dadosDoCartao = pegaDadosDoForm();

  var novoCartaoHTML = criaCartao(dadosDoCartao);

  adicionaCartaoNaPagina(novoCartaoHTML);

});


function pegaDadosDoForm(){
  var dados = {}
  
  var inputTitulo = document.querySelector("#titulo");
  var tituloDoCartao = inputTitulo.value;
  
  var textAreaDescricao = document.querySelector("#descricao");
  var descricaoDoCartao = textAreaDescricao.value;
  
  dados.titulo = tituloDoCartao;
  
  dados.descricao = descricaoDoCartao;
  
  return dados;
  
};


function criaCartao(dados){
  var corpoDoCartao = criaCorpoDoCartao();

  var tituloDoCartao = criaTituloDoCartao(dados.titulo);

  var descricaoDoCartao = criaDescricaoDoCartao(dados.descricao);

  corpoDoCartao.appendChild(tituloDoCartao); 

  corpoDoCartao.appendChild(descricaoDoCartao); 

  return corpoDoCartao;                                            

}


function criaCorpoDoCartao(){
  var corpo = document.createElement("div"); 

  corpo.classList.add("cartao");
  return corpo;
}

function criaTituloDoCartao(textoDoTitulo){
  var titulo = document.createElement("h1"); 

  titulo.classList.add("titulo"); 
  titulo.textContent = textoDoTitulo; 

  return titulo;
}


function criaDescricaoDoCartao(textoDoCorpo){
  var descricao = document.createElement("p");
  descricao.classList.add("corpo"); 

  descricao.textContent = textoDoCorpo; 

  return descricao;
}


function adicionaCartaoNaPagina(cartaoRecemCriado){
  var divRow = document.querySelector(".row");

  divRow.appendChild(cartaoRecemCriado);

}