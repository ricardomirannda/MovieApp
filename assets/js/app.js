var formularioFilme = document.querySelector("#formulario-filme");
var adicionarFilme = document.querySelector(".adicionar-filme");


adicionarFilme.addEventListener("click", function(event){
	console.log(pegaDadosDoForm());
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


