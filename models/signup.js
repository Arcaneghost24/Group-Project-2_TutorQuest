
document.querySelector('#signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.querySelector('#fullName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const userType = document.querySelector('#userType').value;