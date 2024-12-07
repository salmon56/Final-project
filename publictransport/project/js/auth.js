// Simulated database
let users = [
    {
        username: 'kenneth',
        password: 'ken123',
        email: 'kenneth@example.com'
    }
];

// Check if there are stored users in localStorage
const storedUsers = localStorage.getItem('users');
if (storedUsers) {
    users = JSON.parse(storedUsers);
}

function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        showMainContent();
        return false;
    } else {
        alert('Invalid username or password');
        return false;
    }
}

function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }
    
    if (users.some(u => u.username === username)) {
        alert('Username already exists');
        return false;
    }
    
    const newUser = {
        username,
        email,
        password
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful! Please login.');
    showLogin();
    return false;
}

function showLogin() {
    document.getElementById('registerContainer').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
}

function showRegister() {
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('registerContainer').classList.remove('hidden');
}

function showMainContent() {
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('registerContainer').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
}

function logout() {
    localStorage.removeItem('currentUser');
    document.getElementById('mainContent').classList.add('hidden');
    document.getElementById('loginContainer').classList.remove('hidden');
}

// Check if user is already logged in
window.onload = function() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        showMainContent();
    }
};