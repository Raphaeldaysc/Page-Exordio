document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animação simples para os botões de gênero
  const genreButtons = document.querySelectorAll('.genre-btn');
  genreButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('active');
      setTimeout(() => {
        button.classList.remove('active');
      }, 200);
    });
  });

  // Formulário de inscrição
  const signupForm = document.getElementById('signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm.querySelector('input[type="email"]').value;
    alert(`Obrigado por se inscrever com o e-mail: ${email}. Em breve você receberá mais informações!`);
    signupForm.reset();
  });
});