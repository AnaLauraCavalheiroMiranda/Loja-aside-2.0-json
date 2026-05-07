async function carregar() {
        const container = document.getElementById('container-produtos');
      try{
        const response = await fetch('dados.json');
        if (!response.ok) throw new Error('Falha ao carregar dados');
        const cafes = await response.json();
        container.innerHTML = ' ';

        cafes.forEach(item =>{
            const card = document.createElement('div');
            card.className = 'card';

            card.innerHTML = `
            <img src="imgs/${item.imagem}" alt="Foto do ${item.nome}">
            <h3></h3>
            <p></p>
            <a href="${item.descricao}">
                <button type="button">comprar</button>
            `;
            card.querySelector('h3').textContent = item.nome
            card.querySelector('p').textContent = item.descricao

            container.appendChild(card);
      });
    } catch (error) {
        console.error('Erro na requisição', error);
        container.innerHTML = `<p>Desculpe, não foi possível carregar as informações no momento</p> `;
    }
}
