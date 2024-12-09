document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();

        if (response.ok) {
            alert('Login successful!');
            window.location.href = 'task-management-tool.html';
        } else {
            alert(result.message || 'Invalid credentials.');
        }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
});