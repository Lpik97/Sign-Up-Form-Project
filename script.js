function checkCoincidence(e) {
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeat-password').value;
    let message = document.getElementsByClassName('message');

    if (password !== repeatPassword) {
        e.preventDefault(); // Prevent form submission
        message[0].textContent = 'Passwords do not match!';
        message[1].textContent = 'Passwords do not match!';
    } else {
        message[0].textContent = '';
        message[1].textContent = '';
    }
}

document.getElementById('form').addEventListener('submit', checkCoincidence);