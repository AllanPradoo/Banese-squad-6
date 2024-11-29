
function fazerLogin(event){
    event.preventDefault();

    const cpfUser = document.getElementById('cpf-user').value.trim();
    const caractersCampo = cpfUser.length;
    const loginWarn = document.getElementById('warn-login');

    if(caractersCampo < 14){
        loginWarn.style.display = 'block';
    } else {
        loginWarn.style.display = 'none';
        window.location.href = './dashboard_adm.html';
    }
}