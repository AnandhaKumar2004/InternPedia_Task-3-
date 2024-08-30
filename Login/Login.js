const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Admin' && password === '12345678') {
        alert('Login successful!');
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
