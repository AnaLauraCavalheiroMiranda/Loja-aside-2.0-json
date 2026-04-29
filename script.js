function carregar() {
    fetch('dados.json')
    .then(response => response.json())
    .then(dados => {
        const container = document.getElementById('container-produtos');
        
        container.innerHTML = ""; 

        dados.forEach(item => {
            const cardHTML = `
                <div class="card">
                    <!-- Adicionei uma imagem de exemplo, coloque o link real depois -->
                    <img src="https://placeholder.com" class="gato_produto">
                    <h3>${item.produto}</h3>
                    <p><strong>${item.preco}</strong></p>
                    <p>${item.descricao}</p)
                    <a href="#" class="botao">Pedir Agora</a>
                </div>
            `;
            container.innerHTML += cardHTML;
        });
    })
    .catch(error => console.error('Erro:', error));
}
