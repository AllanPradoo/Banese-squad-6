
const botaoCriarCampanha = document.getElementById('criar-btn');
const inputCadastro = document.getElementById('input-cadastro');
const botaoAddBlack = document.getElementById('botao-input-black');

function campoAddBlack(){
    inputCadastro.style.display = 'inline-block';
    botaoCriarCampanha.style.display = 'none';
    botaoAddBlack.style.display = 'block';
}

let contadorBlack = 0;

function adicionarBlack(){
    const descricaoList = document.getElementById('descricao-list').value;
    const tipoCartao = document.getElementById('tipo-cartao').value;
    const mecanicaDisponibilizacao = document.getElementById('mecanica-disponibilizacao').value;

    if (tipoCartao != '' && descricaoList !== '' && mecanicaDisponibilizacao !== '') {
        const blackListSection = document.getElementById('black-list-section');

        const usuarioList = document.createElement('li');
        usuarioList.classList.add('usuario-list');
        usuarioList.innerText = tipoCartao;
        blackListSection.appendChild(usuarioList);

        contadorBlack++
        limparInputs()

    } else {
        alert('Por favor, insira todas as informações necessárias');
    }
}

function limparInputs() {
    document.getElementById('descricao-list').value = '';
}

function fecharInput() {
    inputCadastro.style.display = 'none';
    botaoCriarCampanha.style.display = 'block';
}

function criarCampanha() {
    if (contadorBlack === 0) {
        alert('Por favor, forneça as informações da BlackList');
    } else {
        alert('Campanha criada com sucesso!');
        window.location.href = './dashboard_adm.html';
    }
}

const campoWarn = document.getElementById('warn-cancelamento');
function warnCancelamento(){
    campoWarn.style.display = 'block';
}

function cancelarSim(){
    window.location.href = './dashboard_adm.html';
}

function cancelarNao(){
    campoWarn.style.display = 'none';
}