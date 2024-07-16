document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/users/student')
    .then(response => response.json())
    .then(data => {
      const source = document.getElementById('student-profile-template').innerHTML;
      const template = Handlebars.compile(source);
      const html = template(data);
      document.getElementById('student-profile-container').innerHTML = html;
    })
    .catch(error => console.error('Error fetching student data:', error));
});