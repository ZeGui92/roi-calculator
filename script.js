function updateRangeValue(rangeInput) {
    const valueSpan = rangeInput.nextElementSibling;
    valueSpan.textContent = rangeInput.value;
    
    // Atualizar a posição do valor do range
    rangeInput.style.setProperty("--range-value", `${(rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100}%`);
    
    // Atualizar os cálculos baseados nos valores atuais
    updateCalculations();
}

function updateCalculations() {
    const averageDealSize = document.querySelectorAll('.input-range')[0].value; // Average Deal Size
    const numberOfProspects = document.querySelectorAll('.input-range')[1].value; // Number of B2B Prospects
    const closeRatio = document.querySelectorAll('.input-range')[2].value; // Close Ratio

    // Cálculos de simulação
    const yearlyExpense = (averageDealSize * numberOfProspects * 0.1).toFixed(2);
    const appointments = Math.round(numberOfProspects * (closeRatio / 100) * 0.2);
    const roiPercentage = ((averageDealSize * numberOfProspects * (closeRatio / 100)) / yearlyExpense * 100).toFixed(2);

    // Atualizar valores no HTML
    document.querySelector('.main-value').textContent = `$${yearlyExpense}`;
    document.querySelector('.stat-number').textContent = appointments;
    document.querySelectorAll('.stat-number')[1].textContent = `${roiPercentage}%`;
}

// Chama a função para calcular os valores iniciais
updateCalculations();
