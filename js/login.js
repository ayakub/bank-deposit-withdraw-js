document.getElementById('btn-submit').addEventListener('click', function () {
    //email
    let emailField = document.getElementById('email-user');
    let email = emailField.value;

    //password
    let passwordField = document.getElementById('password-user');
    let password = passwordField.value;

    if (email === 'ayakub1086@gmail.com' && password === '1086676869') {
        window.location.href = 'bank.html'
    } else {
        alert('Invalid user')
    }
})