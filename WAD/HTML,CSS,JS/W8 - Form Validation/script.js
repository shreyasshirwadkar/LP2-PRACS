// Enable Bootstrap tooltips
const tooltipTriggerList = [
  ...document.querySelectorAll('[data-bs-toggle="tooltip"]'),
];
tooltipTriggerList.forEach((el) => new bootstrap.Tooltip(el));
// Form Validation
const form = document.getElementById("registrationForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    alert("Registration Successful!");
    form.reset();
  } else {
    form.classList.add("was-validated");
  }
});
