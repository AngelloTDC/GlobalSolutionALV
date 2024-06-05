document.getElementById('sacForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    if (name && email && subject && message) {
      showModal();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  
  function showModal() {
    const modal = document.getElementById('successModal');
    const closeButton = document.querySelector('.close-button');
  
    modal.style.display = 'block';
  
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  