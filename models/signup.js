document
  .querySelector('#signup-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.querySelector('#fullName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const userType = document.querySelector('#userType').value;

    if (name && email && password && userType) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, userType }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to sign up.');
      }
    }
  });
