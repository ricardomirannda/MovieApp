var formularioFilme = document.querySelector("#formulario-filme");
var adicionarFilme = document.querySelector(".adicionar-filme");


adicionarFilme.addEventListener("click", function(event){
	// console.log(pegaDadosDoForm());

	event.preventDefault()

  // Começamos aqui! Parte 1 : pegar os dados do form. Fiz uma função que retorna os dados do form 
  //em um objeto do javascript. Veja como fiz cada passo dessa função.
  var dadosDoCartao = pegaDadosDoForm();

  // Agora Parte 2:Criar o cartão. Agora vou criar uma função especialista em criar o HTML 
  //do cartão que comentei ali em cima, a partir dos dados do cartão que extraimos na variavel anterior
  var novoCartaoHTML = criaCartao(dadosDoCartao);

  // Parte 3: Adicionar o cartão na página
  // Com o cartão criado, agora podemos adicionálo na div.row
  // Vamos criar uma função especialista nisso
  adicionaCartaoNaPagina(novoCartaoHTML);



});



function pegaDadosDoForm(){
	// Aqui estou declarando um objeto vazio do Javascript. Vamos preenchê-lo já já com os dados do form
	var dados = {}

	var nomeFilme = document.querySelector(".nome-do-filme");
	var tituloDoCartao = nomeFilme.value;


	 // Aqui estou ADICIONANDO uma nova propriedade chamada titulo ao meu objeto que criei lá em cima, com o valor que peguei do campo.
	 dados.titulo = tituloDoCartao;


	/*
	    Até agora tenho um objeto assim:
	     dados{
	      titulo: "Titulo do cartão que veio do form",
	     }
	     */


  // por ultimo, quero retonar este objeto criado nesta função para ser utilizado em outra parte do código.
  return dados;
  
  // Volte para a funçao do click e veja a próxima etapa
  
}



function criaCartao(dados){

	var corpoDoCartao = criaCorpoDoCartao();

	var tituloDoCartao = criaTituloDoCartao(dados.titulo);

	corpoDoCartao.appendChild(tituloDoCartao); 

	return corpoDoCartao;                                            

}

function criaCorpoDoCartao(){

	var corpo = document.createElement("div"); 

	corpo.classList.add("column");

	return corpo;
}



function criaTituloDoCartao(textoDoTitulo){

	var titulo = document.createElement("h1"); 

	titulo.classList.add("titulo"); 

	titulo.textContent = textoDoTitulo 

	return titulo
}



function adicionaCartaoNaPagina(cartaoRecemCriado){

	var conteudoTitulo = document.querySelector(".lista-filmes-series-animes");

	conteudoTitulo.appendChild(cartaoRecemCriado)
}

