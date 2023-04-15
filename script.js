function checkCoincidence (event) {
    event.preventDefault();
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeat-password').value;
    let message = document.getElementsByClassName('message');
    if (password.length != 0) {
        if (password === repeatPassword) {
                document.getElementById('form').submit();
        } else {
                message[0].textContent = 'Passwords do not match!';
                message[1].textContent = 'Passwords do not match!';
        }
    }
    console.log(message.textContent);
}
