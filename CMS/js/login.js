var btnLogin = document.getElementById('btn-login');
var inputEmail = document.getElementById('loginUser');
var inputPassword = document.getElementById('loginPassword');

// btnLogin.onclick = function() {
//     window.open('../pages/home.html');
// };

function loadHome() {
    console.log("inputEmail.value", inputEmail.value);
    console.log("inputPassword.value", inputPassword.value);

    if (inputEmail.value == 'admin' && inputPassword.value == 'adminweb') {
        window.open('../pages/home.html');
    }
}