
window.onload = function (){
    const campanhasDados = JSON.parse(localStorage.getItem('campanhasAtivas')) || [];
    const divInformacoesObtidas = document.getElementById('campanhas-encerradas-itens');
    const campanhasEncerradas = JSON.parse(localStorage.getItem('campanhasEncerradas')) || [];

    if (campanhasEncerradas.length > 0) {
        campanhasEncerradas.forEach((campanha) => {
            const encerradasContainer = document.createElement('p');
            encerradasContainer.classList.add('campanha-item');

            const nomeEncerrada = document.createElement('p');
            nomeEncerrada.innerText = campanha.nome;

            const beneficioEncerrada = document.createElement('p');
            beneficioEncerrada.innerText = campanha.beneficio;

            const dataInicioEncerrada = document.createElement('p');
            dataInicioEncerrada.innerText = campanha.dataInicio;

            const dataFimEncerrada = document.createElement('p');
            dataFimEncerrada.innerText = campanha.dataFim;

            encerradasContainer.appendChild(nomeEncerrada);
            encerradasContainer.appendChild(beneficioEncerrada);
            encerradasContainer.appendChild(dataInicioEncerrada);
            encerradasContainer.appendChild(dataFimEncerrada);
            divInformacoesObtidas.appendChild(encerradasContainer);
        });

    } else {
        divInformacoesObtidas.innerHTML = '<p>Nenhuma campanha ativa no momento.</p>';
    }
}