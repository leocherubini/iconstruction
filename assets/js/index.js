$('#botao-login').click(function(e) {
	e.preventDefault();
	
	var tipoUsuario = $('#tipo-usuario').val();
	
	if(tipoUsuario == "auditor") {
		window.location.href = env + "acompanhamento.html";
	} else if(tipoUsuario == "prestador") {
		window.location.href = env + "servicos.html";
	} else {
		window.location.href = env + "reformas.html";
	}
	
});

$('#sevicos-voltar').click(function(e) {
	e.preventDefault();
	
	window.location.href = env + "index.html";
});

$('#acompanhamento-voltar').click(function(e) {
	e.preventDefault();
	
	window.location.href = env + "index.html";
});

$('#botao-reforma').click(function(e) {
	e.preventDefault();
	
	window.location.href = env + "pedido.html";
});

$('#botao-tabela').click(function(e) {
	e.preventDefault();
	
	window.location.href = env + "table.html";
});

$('#reforma-voltar').click(function(e) {
	e.preventDefault();
	
	window.location.href = env + "index.html";
});

$('#table-voltar').click(function(e) {
	e.preventDefault();
	
	window.location.href = env + "reformas.html";
});

$('#selecao-medida').change(function(e) {
	e.preventDefault();
	
	$('#orcamento-text').val('R$ 1.489,00');
});

$('#pedido-voltar').click(function(e) {
	e.preventDefault();
	
	window.location.href = env + "index.html";
});