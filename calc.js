/* ---------------------------- */
/* -------- Variaveis --------- */
/* ---------------------------- */

memoria =0;
total = 0;
oper = [];
operatorClicked = "";

/* ---------------------------- */
/* --- Botões da Calculadora -- */
/* ---------------------------- */

function arrayInput(array){ // Função que armazena os dados no Array e envia para as funções

	if (array){
		oper.push(array);
	}
	
	n = oper.join("");

	if (oper.join("") == 0 ){
		oper.pop();
	} else {		
		$("#painel").val(n);
	}

	return(n);

}

$(".btn-number").on("click", function(){ // Função para pegar o valor dos botões do HTML

	if ($(this).attr("val-num")){
		arrayInput($(this).attr("val-num"));
	}

});

/* ---------------------------- */
/* -- Funções da Calculadora -- */
/* ---------------------------- */

function memoryClear(){ // Função para limpar a memória

	memoria = 0;
	console.log("Memoria apagada");

}

function memoryRecover(){ // Função para recuperar dado da memória

	if(Number(arrayInput()) == 0 && total > 0){

		console.log("Add no Array")
		oper.push(memoria);
		$("#painel").val(memoria);

	} else if(Number(arrayInput()) > 0 && total == 0) {

		total = memoria;
		$("#painel").val(memoria);

	} else if(Number(arrayInput()) == 0 && total == 0){

		console.log("Memoria salva no total");
		total = memoria;
		$("#painel").val(memoria);

	} else if(Number(arrayInput()) > 0 && total > 0){

		console.log("Efetuando a operação...");

	} else {

		console.log("Ops! Ocorreu um erro...");

	}

}

function memorySave(){ // Função para salvar na memória

	if(total == 0){
	
		memoria = Number(arrayInput());
			
	} else {

		console.log("Array vazio, memoria guardou valor do total");

	} if(Number(arrayInput()) == 0){

		memoria = total;

	} else {

		console.log("Total vazio, memoria guardou valor do array");

	}

}	

function addPositivo(){  // Função para somar x no dado armazenado na memória

	if(Number(arrayInput()) == 0){

		memoria += total;
		oper = [];
		$("#painel").val(memoria);
		console.log("O valor da memoria foi atualizado: " + memoria);

	} else {

		memoria += Number(arrayInput());
		oper = [];
		$("#painel").val(memoria);
		console.log("O valor da memoria foi atualizado: " + memoria);

	}

}

function addNegativo(){ // Função para subtrair x no dado armazenado na memória

	if(Number(arrayInput()) == 0){

		memoria -= total;
		oper = [];
		$("#painel").val(memoria);
		console.log("O valor da memoria foi atualizado: " + memoria);

	} else {

		memoria -= Number(arrayInput());
		oper = [];
		$("#painel").val(memoria);
		console.log("O valor da memoria foi atualizado: " + memoria);

	}

}

function apagarUltimoNum(){ // Função para apagar ultimo número do input
	
	oper.pop();
	total = Number(arrayInput());
	$("#painel").val(total);

}

function apagarUltimoOper(){ // Função para apagar o ultimo operador do input

	total = Number(arrayInput());
	$("#painel").val(total);
	oper = [];

}

function resetOper(){ // Função para resetar todos dados do input

	oper = [];
	total = 0;
	$("#painel").val(total);

}

function addPosNeg(){ // Função para pegar o número atual e transforma-lo em negativo ou positivo

	if(total == 0){

		total = Number(arrayInput());

		if(total < 0){
				
			total *= -1;
			$("#painel").val(total);

		} else {

			total *= -1;
			$("#painel").val(total);

		}

	} else {

		if(total < 0){
				
			total *= -1;
			$("#painel").val(total);

		} else {

			total *= -1;
			$("#painel").val(total);

		}

	}

}

function calcRaiz(){ // Função para calcular a raiz

	if(total == 0){

		total = Number(arrayInput());
		total = Math.sqrt(total);
		Oper = [];
		$("#painel").val(total);
	
	} else {

		total = Math.sqrt(total);
		Oper = [];
		$("#painel").val(total);

	}

}

function calcPorcentagem(){ // Função para calcular a porcentagem
	
	var porcento = total;	
	total = Number(arrayInput());

	oper = [];
	total /= 100;
	total *= porcento;
	$("#painel").val(total);

}

function calcReciproc(){ // Função para 
	
	if(total == 0){

		total = Number(arrayInput());
		total = 1 / total;
		$("#painel").val(total);

	} else {

		total = 1 / total;
		$("#painel").val(total);

	}

}

function calcDiv(){ // Função para calcular divisão
	
	if(total == 0){

		total = Number(arrayInput());
		oper = [];

	} else if(Number(arrayInput()) == 0) {

		console.log("Array vazio, esperando o proximo operando");

	} else {

		total /= Number(arrayInput());
		oper = [];
		$("#painel").val(total);

	}
	
}

function calcMult(){ // Função para calcular multiplicação
	
	if(total == 0){

		total = Number(arrayInput());
		oper = [];

	} else if(Number(arrayInput()) == 0){

		console.log("Array vazio, esperando o proximo operando");

	} else {

		total *= Number(arrayInput());
		oper = [];
		$("#painel").val(total);

	}

}

function calcSub(){ // Função para calcular subtração
	
	if(total == 0){

		total -= Number(arrayInput());
		addPosNeg();
		oper = [];
		$("#painel").val(total);

	} else {

		total -= Number(arrayInput());
		oper = [];
		$("#painel").val(total);

	}

}

function calcAdc(){ // Função para calcular adição
	
	total += Number(arrayInput());
	oper = [];
	$("#painel").val(total);

}

function igualTotal(){ // Função para calcular a operação
	
	result(operatorClicked);

}


/* ---------------------------- */
/* ---- Funções Operadores ---- */
/* ---------------------------- */

function result(operator){ // Função que recebe o ID e chama a função do operador selecionado
	switch(operator){
		
		case 'adc': // Chama a função da calculadora para efetuar uma adição

			calcAdc();
			operatorClicked = operator;
			statusClicked = operator;

		break;

		case 'sub': // Chama a função da calculadora para efetuar uma subtração
		
			calcSub();
			operatorClicked = operator;
			statusClicked = operator;

		break;

		case 'mlt': // Chama a função da calculadora para efetuar uma multiplicação

			calcMult();
			operatorClicked = operator;
			statusClicked = operator;
		
		break;

		case 'div': // Chama a função da calculadora para efetuar uma divisão

			calcDiv();
			operatorClicked = operator;
			statusClicked = operator;
		
		break;

		case 'maismenos': // Chama a função da calculadora para efetuar a troca do num x entre positivo e negativo

			addPosNeg();
			operatorClicked = operator;
		
		break;

		case 'raiz': // Chama a função da calculadora para efetuar a raiz quadrada

			calcRaiz();
			operatorClicked = operator;
			statusClicked = operator;
		
		break;

		case 'porc': // Chama a função da calculadora para efetuar a raiz quadrada

			calcPorcentagem();
			operatorClicked = operator;
		
		break;

		case 'inver': // Chama a função da calculadora para efetuar a raiz quadrada

			calcReciproc();
			operatorClicked = operator;
		
		break;

		case 'mc': // Chama a função da calculadora para apagar os dois operandos e a memoria

			memoryClear();
		
		break;

		case 'mr': // Chama a função da calculadora para apagar os dois operandos e a memoria

			memoryRecover();
		
		break;

		case 'ms': // Chama a função da calculadora para apagar os dois operandos e a memoria

			memorySave();
		
		break;

		case 'mmais': // Chama a função da calculadora para apagar os dois operandos e a memoria

			addPositivo();
		
		break;

		case 'mmenos': // Chama a função da calculadora para apagar os dois operandos e a memoria

			addNegativo();
		
		break;

		case 'igual': // Chama a função da calculadora para efetuar o calculo
			
			igualTotal();

		break;

		case 'apagar': // Chama a função da calculadora para apagar ultimo num do Array

		apagarUltimoNum();
		operatorClicked = operator;
		
		break;

		case 'ce': // Chama a função da calculadora para apagar todo Array do segundo operando

			apagarUltimoOper();
			operatorClicked = operator;
		
		break;

		case 'reset': // Chama a função da calculadora para apagar os dois operandos e a memoria

			resetOper();
			operatorClicked = operator;
					
	}
}

$(".btn-oper").on("click", function(){ // Função para pegar o ID do operador selecionado
	result(this.id)
});

/* ---------------------------- */
/* --- Botões da Calculadora -- */
/* ---------------------------- */

$(document).on("keydown", function(event){ // Função para integrar o teclado com a calculadora
	
	numpad = (event.keyCode);
	switch(numpad){

		case 13: // ID 13 = ENTER
		
			igualTotal();

		break;
	
		case 46: // ID 46 = Delete
			
			apagarUltimoNum();
		
		break;

		case 110: // ID 110 = ,
		
				arrayInput('.');
		
		break;

		case 106: // ID 106 = *
		
				calcMult();
				operatorClicked = "mlt";
				statusClicked = "mlt";
		
		break;

		case 107: // ID 107 = +
		
				calcAdc();
				operatorClicked = "adc";
				statusClicked = "adc";
		
		break;

		case 109: // ID 109 = -
		
				calcSub();
				operatorClicked = "sub";
				statusClicked = "sub";
		
		break;

		case 111: // ID 111 = /
		
				calcDiv();
				operatorClicked = "div";
				statusClicked = "div";
		
		break;

		case 48: // ID 48 = 0
		case 96: // ID 96 = Numpad 0
			
			arrayInput('0');
		
		break;

		case 49: // ID 49 = 1
		case 97: // ID 97 = Numpad 1
		
			arrayInput(1);
		
		break;

		case 50: // ID 50 = 2
		case 98: // ID 98 = Numpad 2
		
			arrayInput(2);
		
		break;

		case 51: // ID 51 = 3
		case 99: // ID 99 = Numpad 3
		
			arrayInput(3);
		
		break;

		case 52:  // ID 52 = 4
		case 100: // ID 100 = Numpad 4
		
			arrayInput(4);
		
		break;

		case 53:  // ID 53 = 5
		case 101: // ID 101 = Numpad 5
		
			arrayInput(5);
		
		break;

		case 54:  // ID 54 = 6
		case 102: // ID 102 = Numpad 6
		
			arrayInput(6);
		
		break;

		case 55:  // ID 55 = 7
		case 103: // ID 103 = Numpad 7
		
			arrayInput(7);
		
		break;

		case 56:  // ID 56 = 8
		case 104: // ID 104 = Numpad 8
			
			arrayInput(8);
		
		break;

		case 57:  // ID 57 = 9
		case 105: // ID 105 = Numpad 9
		
			arrayInput(9);
		
	}
});