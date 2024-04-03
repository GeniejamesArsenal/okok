//log in js ni diri dapita

document.addEventListener('DOMContentLoaded', (event) => {
    // Toggle password visibility
    const togglePassword = document.querySelector('.show-password');
    const passwordInput = document.querySelector('input[type="password"]');
    
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye-slash');
        togglePassword.classList.toggle('fa-eye');
    });
});


// index.html ni diri dapita sa time and date

function updateDateTime() {
    const dateTime = new Date();
     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
     const formattedDateTime = dateTime.toLocaleString('en-US', options);
    document.getElementById('date-time').textContent = formattedDateTime;
        }
    updateDateTime();
    setInterval(updateDateTime, 1000); 

