document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/users/tutor')
    .then(response => response.json())
    .then(data => {
      const source = document.getElementById('tutor-profile-template').innerHTML;
      const template = Handlebars.compile(source);
      const html = template(data);
      document.getElementById('tutor-profile-container').innerHTML = html;
    })
    .catch(error => console.error('Error fetching tutor data:', error));
});