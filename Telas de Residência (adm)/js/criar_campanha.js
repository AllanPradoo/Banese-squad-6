
function proximoPasso(event) {
    if (event) event.preventDefault();

    const nomeCampanha = document.getElementById('nome-campanha').value;
    const beneficioCampanha = document.getElementById('beneficio-campanha').value;
    const dataInicio = document.getElementById('data-inicio').value;
    const dataFim = document.getElementById('data-encerramento').value;
    const descricaoCampanha = document.getElementById('descricao-campanha').value;

    if (nomeCampanha !== '' && beneficioCampanha !== '' && dataInicio !== '' && dataFim !== '' && descricaoCampanha !== '') {
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

        window.location.href = './white_black_list.html'; 
    } else {
        alert('Insira todas as informações para prosseguir');
    }
}