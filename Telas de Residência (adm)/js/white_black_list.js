
const botaoCriarCampanha = document.getElementById('criar-btn');
const inputCadastro = document.getElementById('input-cadastro');

function campoAdd() {
    inputCadastro.style.display = 'inline-block';
    botaoCriarCampanha.style.display = 'none';
}

let contadorWhite = 0;
let contadorBlack = 0;

function adicionarUser() {
    const descricaoList = document.getElementById('descricao-list').value;
    const typeListInput = document.querySelector('input[name="type-list"]:checked');
    const mecanicaDisponibilizacao = document.getElementById('mecanica-disponibilizacao').value;

    if (typeListInput && descricaoList !== '' && mecanicaDisponibilizacao !== '') {
        const whiteListSection = document.getElementById('white-list-section');
        const blackListSection = document.getElementById('black-list-section');
        const usuarioList = document.createElement('li');
        usuarioList.classList.add('usuario-list');

        if (typeListInput.value === 'WhiteList') {
            usuarioList.innerText = descricaoList;
            whiteListSection.appendChild(usuarioList);

            contadorWhite++;
            limparInputs();

        } else if (typeListInput.value === 'BlackList') {
            usuarioList.innerText = descricaoList;
            blackListSection.appendChild(usuarioList);

            contadorBlack++;
            limparInputs();
        }
    } else {
        alert('Por favor, insira todas as informações necessárias');
    }
}

function limparInputs() {
    const inputList = document.querySelectorAll('input[name="type-list"]');
    inputList.forEach(radio => {
        radio.checked = false;
    });
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
