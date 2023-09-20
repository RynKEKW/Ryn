// Função para exibir o modal específico para cada bloco
function showBlockModal(blockNumber) {
    const modalId = `blockModal${blockNumber}`;
    const modal = document.getElementById(modalId);

    // Exiba o modal
    modal.classList.add("show");
}

// Função para fechar o modal específico para cada bloco
function closeBlockModal(blockNumber) {
    const modalId = `blockModal${blockNumber}`;
    const modal = document.getElementById(modalId);

    // Remova a classe "show" para ocultar o modal com animação
    modal.classList.remove("show");
}

