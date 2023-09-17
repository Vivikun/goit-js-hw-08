document.addEventListener('DOMContentLoaded', function () {
  const saveStateToLocalStorage = _.throttle(() => {
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const formData = { email, message };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500);

  const fillFormFromLocalStorage = () => {
    const storedData = localStorage.getItem('feedback-form-state');
    if (storedData) {
      const formData = JSON.parse(storedData);
      document.querySelector('input[name="email"]').value = formData.email;
      document.querySelector('textarea[name="message"]').value =
        formData.message;
    }
  };

  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  emailInput.addEventListener('input', () => {
    saveStateToLocalStorage();
  });

  messageInput.addEventListener('input', () => {
    saveStateToLocalStorage();
  });

  const formularz = document.querySelector('.feedback-form');
  formularz.addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';

    const storedData = localStorage.getItem('feedback-form-state');
    console.log('Data in local storage after sending the form:', storedData);

    alert('The data has been sent, the local storage has been wiped.');
  });

  window.addEventListener('load', fillFormFromLocalStorage);
});
