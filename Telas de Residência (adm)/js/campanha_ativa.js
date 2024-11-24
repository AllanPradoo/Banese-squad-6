
window.onload = function () {
    const campanhasDados = JSON.parse(localStorage.getItem('campanhasAtivas')) || [];
    const campanhasEncerradas = JSON.parse(localStorage.getItem('campanhasEncerradas')) || [];
    const divInformacoesObtidas = document.getElementById('informacoes-obtidas');

    if (campanhasDados.length > 0) {
        divInformacoesObtidas.innerHTML = '';

        campanhasDados.forEach((campanha, index) => {
            const botaoEncerrarCampanha = document.createElement('button');
            botaoEncerrarCampanha.innerText = 'ENCERRAR';
            botaoEncerrarCampanha.classList.add('botao-encerrar-campanha');
            botaoEncerrarCampanha.onclick = function () {
                encerrarCampanha(index);
            };

            const campanhaContainer = document.createElement('div');
            campanhaContainer.classList.add('campanha-item');

            const nomeAtiva = document.createElement('p');
            nomeAtiva.innerText = campanha.nome;

            const beneficioAtiva = document.createElement('p');
            beneficioAtiva.innerText = campanha.beneficio;

            const dataInicioAtiva = document.createElement('p');
            dataInicioAtiva.innerText = campanha.dataInicio;
            
            const dataFimAtiva = document.createElement('p');
            dataFimAtiva.innerText = campanha.dataFim;

            campanhaContainer.appendChild(nomeAtiva);
            campanhaContainer.appendChild(beneficioAtiva);
            campanhaContainer.appendChild(dataInicioAtiva);
            campanhaContainer.appendChild(dataFimAtiva);
            campanhaContainer.appendChild(botaoEncerrarCampanha)

            divInformacoesObtidas.appendChild(campanhaContainer);

        });
    } else {
        divInformacoesObtidas.innerHTML = '<p>Nenhuma campanha ativa no momento.</p>';
    }

    function encerrarCampanha(index) {
        const campanhaEncerrada = campanhasDados.splice(index, 1)[0];

        campanhasEncerradas.push(campanhaEncerrada);
        localStorage.setItem('campanhasAtivas', JSON.stringify(campanhasDados));
        localStorage.setItem('campanhasEncerradas', JSON.stringify(campanhasEncerradas));

        location.reload(); 
    }

};