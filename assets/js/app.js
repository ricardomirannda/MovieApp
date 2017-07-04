
var adicionarTarefa = document.querySelector(".adicionar-tarefa");
var listaTarefas = document.querySelector(".lista-de-tarefas");


adicionarTarefa.addEventListener("click", function(event){

	var DadosDoForm = PegaDadosDoForm();

	CriaTituloDaTarefa(DadosDoForm);

	ValidaDados()



});


// Pega os dados informados pelo usuário
function PegaDadosDoForm(){

	var dados = {}

	var tituloDaTarefa = document.querySelector(".nome-tarefa").value;

	dados.titulo = tituloDaTarefa;

	return dados;	


}

// Cria o titulo e anexa na lista
function CriaTituloDaTarefa(dados){

	var titulo = document.createElement("h1");
	var li = document.createElement("li");
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.name = "name";
	checkbox.value = "value";
	checkbox.id = "id";


	titulo.textContent = dados.titulo;

	li.appendChild(checkbox);

	listaTarefas.appendChild(li);
	li.appendChild(titulo);


	return titulo;

}



// Valida os dados informados pelo usuário
function ValidaDados(){
	var tituloDaTarefa = document.querySelector(".nome-tarefa").value;
	
	if(tituloDaTarefa == ""){

		console.log("ERRO");

	} 


}


