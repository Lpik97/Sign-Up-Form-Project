function checkCoincidence (event) {
    event.preventDefault();
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeat-password').value;
    let message = document.getElementsByClassName('message')[0];
    if (password.length != 0) {
        if (password === repeatPassword) {
                document.getElementById('form').submit();
        } else {
                message.textContent = 'Passwords do not match!';
        }
    }
    console.log(message.textContent);
}
