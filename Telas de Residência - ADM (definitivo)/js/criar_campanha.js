
const usarLista = document.querySelectorAll("input[name='usar-list']");
const campoTipoLista = document.getElementById('input-checkbox');
const campoUsarLista = document.getElementById('campo-usar-lista');
const warn = document.getElementById('warn');

function proximoPasso(){
    const nomeCampanha = document.getElementById('nome-campanha').value;
    const beneficioCampanha = document.getElementById('beneficio-campanha').value;
    const dataInicio = document.getElementById('data-inicio').value;
    const dataFim = document.getElementById('data-encerramento').value;
    const descricaoCampanha = document.getElementById('descricao-campanha').value;

    if (nomeCampanha !== '' && beneficioCampanha !== '' && dataInicio !== '' && dataFim !== '' && descricaoCampanha !== '') {
        campoUsarLista.style.display = 'block';

        usarLista.forEach(radio => {
            radio.addEventListener('change', () => {
                if (radio.value === 'sim') {
                    warn.style.display = 'none';
                    campoTipoLista.style.display = 'block';
                } else {
                    warn.style.display = 'none';
                    campoTipoLista.style.display = 'none';
                }
            });
        });

    } else {
        alert ('Insira todas as informações para prosseguir')
    }
}

function fecharCampo(){
    campoUsarLista.style.display = 'none';
}

function criacaoCampanha(event) {
    if (event) event.preventDefault();

    const nomeCampanha = document.getElementById('nome-campanha').value;
    const beneficioCampanha = document.getElementById('beneficio-campanha').value;
    const dataInicio = document.getElementById('data-inicio').value;
    const dataFim = document.getElementById('data-encerramento').value;
    const descricaoCampanha = document.getElementById('descricao-campanha').value;

    const checkboxes = campoTipoLista.querySelectorAll('input[type="checkbox"]:checked');
    const listasSelecionadas = Array.from(checkboxes).map(checkbox => checkbox.value);

    if (
        nomeCampanha !== '' &&
        beneficioCampanha !== '' &&
        dataInicio !== '' &&
        dataFim !== '' &&
        descricaoCampanha !== '' &&
        listasSelecionadas.length > 0
    ) {
        const novaCampanha = {
            nome: nomeCampanha,
            beneficio: beneficioCampanha,
            dataInicio: dataInicio,
            dataFim: dataFim,
            descricao: descricaoCampanha,
        };

        const campanhas = JSON.parse(localStorage.getItem('campanhasAtivas')) || [];
        campanhas.push(novaCampanha);
        localStorage.setItem('campanhasAtivas', JSON.stringify(campanhas));

        if (listasSelecionadas.includes('WhiteList') && listasSelecionadas.includes('BlackList')) {
            window.location.href = './white_black_list.html';
        } else if (listasSelecionadas.includes('WhiteList')) {
            window.location.href = './white_list.html';
        } else if (listasSelecionadas.includes('BlackList')) {
            window.location.href = './black_list.html';
        }
    } else {
        warn.style.display = 'block';
    }
}