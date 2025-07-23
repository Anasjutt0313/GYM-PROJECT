function validateForm() {
    // Reset errors
    document.getElementById('usernameEmailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('agreeCheckError').textContent = '';

    // Get form values
    var usernameEmail = document.getElementById('usernameEmail').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();
    var agreeCheck = document.getElementById('agreeCheck').checked;

    // Validation
    var isValid = true;

    if (usernameEmail === '') {
        document.getElementById('usernameEmailError').textContent = 'Username or Email is required';
        isValid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    }

    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm your password';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    if (!agreeCheck) {
        document.getElementById('agreeCheckError').textContent = 'You must agree to the terms and conditions';
        isValid = false;
    }

    return isValid;
}