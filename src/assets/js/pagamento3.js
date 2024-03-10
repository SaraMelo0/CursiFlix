// pagamento 3
// geração de boleto


function gerarBoleto() {
    const nomeTitular = document.getElementById("nomeTitular").value;
    const cpf = document.getElementById("cpf").value;
    const valorBoleto = parseFloat(document.getElementById("valor").value);

    if (nomeTitular && cpf && !isNaN(valorBoleto)) {
        // número de boleto aleatório
        const numeroBoleto = Math.floor(Math.random() * 1000000000000); 

        const boletoInfo = `Nome do Titular: ${nomeTitular}\nCPF: ${cpf}\nValor do Boleto: R$${valorBoleto.toFixed(2)}\nNúmero do Boleto: ${numeroBoleto}`;

        // o boleto gerado
        alert("Boleto gerado com sucesso:\n\n" + boletoInfo);

        // alerta de confirmação e redireciona para a página de cadastro
        if (confirm("Clique em OK para ir para outra página.")) {
            window.location.href = "cadastro.html"; 
        }
    } else {
        alert("Preencha todos os campos corretamente para gerar o boleto.");
    }
}


