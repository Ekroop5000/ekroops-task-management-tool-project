document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        const result = await response.json();

        if (response.ok) {
            alert('Sign up successful! Please login.');
            window.location.href = 'login.html';
        } else {
            alert(result.message || 'An error occurred during sign-up.');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
});