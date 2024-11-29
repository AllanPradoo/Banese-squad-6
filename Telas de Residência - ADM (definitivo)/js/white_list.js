
const botaoCriarCampanha = document.getElementById('criar-btn');
const inputCadastro = document.getElementById('input-cadastro');
const botaoAddWhite = document.getElementById('botao-input-white');

function campoAddWhite() {
    inputCadastro.style.display = 'inline-block';
    botaoCriarCampanha.style.display = 'none';
    botaoAddWhite.style.display = 'block';
}

let contadorWhite = 0;

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

function limparInputs() {
    document.getElementById('descricao-list').value = '';
}

function fecharInput() {
    inputCadastro.style.display = 'none';
    botaoCriarCampanha.style.display = 'block';
}

function criarCampanha() {
    if (contadorWhite === 0) {
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