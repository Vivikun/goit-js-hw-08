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
  const formularz = document.querySelector('.feedback-form');

  emailInput.addEventListener('input', () => {
    saveStateToLocalStorage();
  });

  messageInput.addEventListener('input', () => {
    saveStateToLocalStorage();
  });

  formularz.addEventListener('submit', function (e) {
    e.preventDefault();

    // Dodaj walidację pól formularza
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (!emailValue || !messageValue) {
      alert('Please complete all form fields.');
      return;
    }
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
    const formData = { email: emailValue, message: messageValue };
    console.log('Data from the form:', formData);

    alert(
      'The data has been sent and the data in the local storage has been deleted.'
    );
  });

  window.addEventListener('load', fillFormFromLocalStorage);
});
