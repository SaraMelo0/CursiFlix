// Pagamento 1

// Troca de plano
const currentPlanText = document.getElementById('current-plan');
        const currentPrice = document.getElementById('current-price');
        const trocarButton = document.getElementById('trocar-button');
        let isAnnual = false;

        trocarButton.addEventListener('click', () => {
            if (isAnnual) {
                currentPlanText.textContent = 'Plano mensal';
                currentPrice.textContent = '$21,90/mês';
                trocarButton.textContent = 'Trocar';
            } else {
                currentPlanText.textContent = 'Plano anual';
                currentPrice.textContent = '$165,90/ano';
                trocarButton.textContent = 'Trocar';
            }
            isAnnual = !isAnnual;
        }); // fim da troca

// Efetuar pagamento:

document.getElementById('btn').addEventListener('click', function() {
    alert('Pagamento processado com sucesso!');
}); // fim da efetuação


