// Função para mostrar ou ocultar o campo de data
function mostrarData(mostrar) {
    const div = document.getElementById("data-parada");
    div.style.display = mostrar ? "inline-block" : "none"; // Exibe ou oculta o campo
}

// Adicionando evento para detectar mudanças nos botões de rádio
const radios = document.getElementsByName("gerou-parada");

radios.forEach(radio => {
    radio.addEventListener("change", function() {
        // Verifica se o valor selecionado é "Sim"
        if (this.value === "Sim") {
            mostrarData(true); // Exibe o campo de data e hora
        } else {
            mostrarData(false); // Oculta o campo de data e hora
        }
    });
});
