const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#user-name').value.trim();
  const email = document.querySelector('#user-email').value.trim();
  const password = document.querySelector('#user-password').value.trim();
  const role = document.querySelector('#userType');

  if (name && email && password && role) {
    const response = await fetch('/api/users/new', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, role }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create project');
    }
  }
};

document
  .querySelector('.new-user-form')
  .addEventListener('submit', newFormHandler);
