const form = document.querySelector(".email-form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".email-form__error-message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(message) {
  form.classList.add("has-error");
  emailInput.setAttribute("aria-invalid", "true");
  errorMessage.textContent = message;
}

function clearError() {
  form.classList.remove("has-error");
  emailInput.removeAttribute("aria-invalid");
  errorMessage.textContent = "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    showError("Please enter your email address");
    return;
  }

  if (!emailRegex.test(email)) {
    showError("Please provide a valid email");
    return;
  }

  clearError();

  console.log("Valid email submitted");
});

emailInput.addEventListener("input", () => {
  if (form.classList.contains("has-error")) {
    clearError();
  }
});
