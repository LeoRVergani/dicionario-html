// Seleciona o botão pelo ID
const botao = document.getElementById('meuBotao');

// Adiciona um ouvinte de evento de clique ao botão
botao.addEventListener('click', function() {
    // Gera uma cor aleatória
    const corAleatoria = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Define a cor de fundo do botão como a cor aleatória gerada
    botao.style.backgroundColor = corAleatoria;
});