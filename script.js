function checkCoincidence(e) {
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeat-password').value;
    let message = document.getElementsByClassName('message');
    let passwordInput = document.querySelectorAll('input[type="password"]');


    if (password !== repeatPassword) {
        e.preventDefault(); // Prevent form submission
        message[0].textContent = 'Passwords do not match!';
        message[1].textContent = 'Passwords do not match!';
        passwordInput.forEach(password => {
            password.classList.add('wrong-password');
        });
    } else {
        message[0].textContent = '';
        message[1].textContent = '';
        passwordInput.forEach(input => {
            input.classList.remove('wrong-password');
        });    
    }
}

document.getElementById('form').addEventListener('submit', checkCoincidence);