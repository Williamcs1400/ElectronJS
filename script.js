const pass = document.querySelector('#pass');
const newPassword = document.querySelector('#newPassword');

function generatePass(){

    newPassword.innerHTML = '';

    if(pass.value == ''){
        alert('Digite o tamanho desejado para a sua senha!');
        return;
    }
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
    let password = '';
    const n = charset.length;

    for(let  i = 0; i < pass.value; i++){
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    const result = document.createTextNode(password);
    return newPassword.appendChild(result);

}