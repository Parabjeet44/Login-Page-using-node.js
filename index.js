const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Function to switch between login and signup forms
function switchForm(action) {
    if (action === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginForm.setAttribute('action', '/login');
    } else if (action === 'signup') {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        signupForm.setAttribute('action', '/signup');
    }
}

// Event listener for login button
document.getElementById('loginButton').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    switchForm('login');
});

// Event listener for signup button
document.getElementById('signupButton').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    switchForm('signup');
});

// Event listener for go to signup button
document.getElementById('goToSignupButton').addEventListener('click', () => {
    switchForm('signup');
});
