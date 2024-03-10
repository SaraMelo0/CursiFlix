// Pagamento 2

document.addEventListener("DOMContentLoaded", function () {
    const realizarPagamentoButton = document.getElementById("realizar-pagamento");

    realizarPagamentoButton.addEventListener("click", function () {
        const planoSelecionado = document.getElementById("plano").value;
        const nome = document.getElementById("nome").value;
        const chavePix = document.getElementById("chave-pix").value;

        if (planoSelecionado && nome && chavePix) {

            // Simulação de pagamento:
            const valor = document.querySelector(`option[value="${planoSelecionado}"]`).getAttribute("data-valor");
            const mensagem = `Você está prestes a efetuar um pagamento de R$ ${valor} para o plano "${planoSelecionado}" em nome de ${nome} usando a chave PIX ${chavePix}. Clique em "OK" para continuar.`;
            
            if (confirm(mensagem)) {
                // Redirecionar para a página de cadastro
                window.location.href = "cadastro.html";
            }
        } else {
            alert("Por favor, preencha todos os campos para realizar o pagamento.");
        }
    });
});


