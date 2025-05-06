const registrationForm = document.getElementById('registrationForm');
const viewDataBtn = document.getElementById('viewDataBtn');

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(registrationForm);
    const userData = Object.fromEntries(formData.entries());

    let userDataArray = JSON.parse(localStorage.getItem('userDataArray')) || [];

    userDataArray.push(userData);

    localStorage.setItem('userDataArray', JSON.stringify(userDataArray));

    // Display a success message
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Data Entered!';
    successMessage.style.color = 'green';
    successMessage.style.fontWeight = 'bold';
    successMessage.style.marginTop = '10px';
    registrationForm.appendChild(successMessage);

    // Reset the form after a short delay
    setTimeout(() => {
        registrationForm.reset();
        successMessage.remove();
    }, 2000);
});

viewDataBtn.addEventListener('click', () => {
    window.location.href = 'viewData.html';
});