// Client-side form validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    // Perform form validation here (e.g., check if fields are filled correctly)
    // If validation passes, submit the form
    document.getElementById("signupForm").submit();
}
