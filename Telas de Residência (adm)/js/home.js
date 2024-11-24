
window.onload = function () {
    const campanhasAtivas = JSON.parse(localStorage.getItem('campanhasAtivas')) || [];
    const campanhasEncerradas = JSON.parse(localStorage.getItem('campanhasEncerradas')) || [];
    const divCampanhasAtivas = document.getElementById('nav-campanhas-ativas');
    const divCampanhasEncerradas = document.getElementById('nav-campanhas-encerradas');

    if (campanhasAtivas.length > 0) {
        campanhasAtivas.forEach((campanha) => {
            const ativasContainer = document.createElement('li');
            ativasContainer.classList.add('nome-campanha');

            const nomeAtiva = document.createElement('p');
            nomeAtiva.innerText = campanha.nome;

            ativasContainer.appendChild(nomeAtiva);
            divCampanhasAtivas.appendChild(ativasContainer);
        });
    } else {
        divCampanhasAtivas.innerHTML = '<p>Nenhuma campanha ativa no momento.</p>';
    }

    if (campanhasEncerradas.length > 0) {
        campanhasEncerradas.forEach((campanha) => {
            const encerradasContainer = document.createElement('li');
            encerradasContainer.classList.add('nome-campanha');

            const nomeEncerrada = document.createElement('p');
            nomeEncerrada.innerText = campanha.nome;

            encerradasContainer.appendChild(nomeEncerrada);
            divCampanhasEncerradas.appendChild(encerradasContainer);
        });
    } else {
        divCampanhasEncerradas.innerHTML = "<p style='margin-top= 15px;'>Nenhuma campanha encerrada no momento.</p>";
    }
};
