const userDataTable = document.getElementById('userDataTable');
const backBtn = document.getElementById('backBtn');

const userDataArray = JSON.parse(localStorage.getItem('userDataArray')) || [];

userDataArray.forEach((userData) => {
    const tableRow = userDataTable.insertRow();

    Object.entries(userData).forEach(([key, value]) => {
        const cell = tableRow.insertCell();
        cell.textContent = value;
    });
});

backBtn.addEventListener('click', () => {
    window.location.href = 'registration.html';
});