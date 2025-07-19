function showProjects(type) {
  const personal = document.getElementById('personal-projects');
  const client = document.getElementById('client-projects');
  const buttons = document.querySelectorAll('.project-tabs button');
  if (type === 'personal') {
    personal.style.display = 'flex';
    client.style.display = 'none';
    buttons[0].classList.add('active');
    buttons[1].classList.remove('active');
  } else {
    personal.style.display = 'none';
    client.style.display = 'flex';
    buttons[0].classList.remove('active');
    buttons[1].classList.add('active');
  }
}

// // Show modal when Get in Touch is clicked
// document.querySelectorAll('.contact-btn').forEach(btn => {
//   btn.addEventListener('click', function(e) {
//     e.preventDefault();
//     document.getElementById('contactModal').style.display = 'flex';
//   });
// });

// function closeModal() {
//   document.getElementById('contactModal').style.display = 'none';
// }