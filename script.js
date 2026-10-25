// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if(navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#0f172a';
            navLinks.style.padding = '1.5rem';
            navLinks.style.textAlign = 'center';
            navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        }
    });
}

// Client-Side Contact Form Validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === '') {
            setError(nameInput, 'Name is required');
            isValid = false;
        } else {
            setSuccess(nameInput);
        }

        // Validate Email
        if (emailInput.value.trim() === '') {
            setError(emailInput, 'Email is required');
        } else if (!isValidEmail(emailInput.value.trim())) {
            setError(emailInput, 'Provide a valid email address');
            isValid = false;
        } else {
            setSuccess(emailInput);
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            setError(messageInput, 'Message cannot be blank');
            isValid = false;
        } else {
            setSuccess(messageInput);
        }

        // If form is fully valid
        if (isValid) {
            successMessage.textContent = 'Thank you! Your message has been sent successfully.';
            contactForm.reset();
            
            // Clear success message after 5 seconds
            setTimeout(() => {
                successMessage.textContent = '';
            }, 5000);
        } else {
            successMessage.textContent = '';
        }
    });
}

function setError(input, message) {
    const formGroup = input.parentElement;
    const errorSmall = formGroup.querySelector('.error-msg');
    errorSmall.textContent = message;
    formGroup.classList.add('error');
    formGroup.classList.remove('success');
}

function setSuccess(input) {
    const formGroup = input.parentElement;
    const errorSmall = formGroup.querySelector('.error-msg');
    errorSmall.textContent = '';
    formGroup.classList.remove('error');
    formGroup.classList.add('success');
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}