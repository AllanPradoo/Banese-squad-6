
const botaoCriarCampanha = document.getElementById('criar-btn');
const inputCadastro = document.getElementById('input-cadastro');
const botaoAddWhite = document.getElementById('botao-input-white');
const botaoAddBlack = document.getElementById('botao-input-black');

function campoAddWhite() {
    botaoAddBlack.style.display = 'none';
    inputCadastro.style.display = 'inline-block';
    botaoCriarCampanha.style.display = 'none';
    botaoAddWhite.style.display = 'block';
}

function campoAddBlack(){
    botaoAddWhite.style.display = 'none';
    inputCadastro.style.display = 'inline-block';
    botaoCriarCampanha.style.display = 'none';
    botaoAddBlack.style.display = 'block';
}

let contadorWhite = 0;
let contadorBlack = 0;

function adicionarWhite(){
    const descricaoList = document.getElementById('descricao-list').value;
    const tipoCartao = document.getElementById('tipo-cartao').value;
    const mecanicaDisponibilizacao = document.getElementById('mecanica-disponibilizacao').value;

    if (tipoCartao != '' && descricaoList !== '' && mecanicaDisponibilizacao !== '') {
        const whiteListSection = document.getElementById('white-list-section');

        const usuarioList = document.createElement('li');
        usuarioList.classList.add('usuario-list');
        usuarioList.innerText = tipoCartao;
        whiteListSection.appendChild(usuarioList);

        contadorWhite++
        limparInputs()

    } else {
        alert('Por favor, insira todas as informações necessárias');
    }
}

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
    if (contadorBlack === 0 && contadorWhite === 0) {
        alert('Por favor, forneça as informações da WhiteList e BlackList');
    } else if (contadorBlack === 0) {
        alert('Por favor, forneça as informações da BlackList');
    } else if (contadorWhite === 0) {
        alert('Por favor, forneça as informações da WhiteList');
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