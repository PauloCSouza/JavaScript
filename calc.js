
/* ---------------------------- */
/* -------- Variaveis --------- */
/* ---------------------------- */

n1=0;
n2=0;
total = 0;

aux=0;
aux2=0;

var tot = new Array();

/* ---------------------------- */
/* -- Funções da Calculadora -- */
/* ---------------------------- */

function apagarNum(){

	tot.pop();

}


function resetNum(){

	for (i = tot.length; i >= 0; i--) {
		tot.pop();
	};

}

function valorTotal(total){

	somatotal = total;

	$("#painel").val(total);

}

/* ---------------------------- */
/* -- Funções da Calculadora -- */
/* ---------------------------- */

$(".btn").on("click", function(){

		switch(this.id){

			case 'adc':

				if (na1 == 0){

					na1 = tot.join('');	
				
				} else if (na1 > 0){
					
					tot.push('+');
					tot.push(na1);
					na2 = eval(tot.join(''));
					
					if (na2 > 0){
						
						total = na2;
						na1 = na2;

						valorTotal(total);
						
						$("#painel").val(total);
						
						} else {
						
							na2 = na2;
						
						}
				
				}

				resetNum();

			break;

			case 'sub':
				
				tot.push('-');
			
			break;

			case 'mlt':
				tot.push('*');
			
			break;

			case 'div':
				tot.push('/');
			
			break;

			case 'apagar':

				apagarNum();			// Chama a função para apagar o ultimo conteúdo do Array
				$("#painel").val(0);	// Exibe no painel que o conteúdo foi apagado

			break;

			case 'c':
			
				resetNum();				// Chama a função para resetar o Array
				$("#painel").val(0);	// Exibe no painel que o Array foi resetado

			break;

			case 'igual':

				aux2 = eval(tot.join(''));
				$("#painel").val(aux2);

		}

	});

$(".btn").on("click", function(){

	switch(this.id){
		
		case'zero':
		//tot.push(0);
		$("#painel").append("0");
		aux = tot.join('');
		//$("#painel").val(aux);
		break;

		case'um':
		tot.push(1);
		$("#painel").val(1);
		aux = tot.join('');
		$("#painel").val(aux);
		break;

		case'dois':
		tot.push(2);
		$("#painel").val(2);
		aux = tot.join('');
		$("#painel").val(aux);
		break;

		case'tres':
		tot.push(3);
		$("#painel").val(3);
		aux = tot.join('');
		$("#painel").val(aux);
		break;

		case'quatro':
		tot.push(4);
		$("#painel").val(4);
		aux = tot.join('');
		$("#painel").val(aux);
		break;

		case'cinco':
		tot.push(5);
		$("#painel").val(5);
		aux = tot.join('');
		$("#painel").val(aux);
		break;

		case'seis':
		tot.push(6);
		$("#painel").val(6);
		aux = tot.join('');
		$("#painel").val(aux);
		break;

		case'sete':
		tot.push(7);
		$("#painel").val(7);
		aux = tot.join('');
		$("#painel").val(aux);
		break;

		case'oito':
		tot.push(8);
		$("#painel").val(8);
		aux = tot.join('');
		$("#painel").val(aux);
		break;

		case'nove':
		tot.push(9);
		aux = tot.join('');
		$("#painel").val(aux);
	}

});