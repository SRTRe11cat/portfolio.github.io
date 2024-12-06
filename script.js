// Smooth Scrolling Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark/Light Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.padding = '10px 15px';
toggleButton.style.background = '#007BFF';
toggleButton.style.color = '#fff';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Adding styles for dark mode
const darkModeStyle = document.createElement('style');
darkModeStyle.textContent = `
  body.dark-mode {
    background: #121212;
    color: #ffffff;
  }
  body.dark-mode header, body.dark-mode footer {
    background: #333;
  }
  body.dark-mode nav ul li a {
    color: #ffffff;
  }
  body.dark-mode .project {
    background: #1e1e1e;
    color: #ffffff;
    border: 1px solid #444;
  }
`;
document.head.appendChild(darkModeStyle);

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  alert('Thank you for your message!');
  form.reset();
});

// Dynamic Typing Effect for Headlines
const headline = document.querySelector('#home h1');
const words = ['Welcome to My Portfolio', 'Hi, I\'m [Your Name]', 'Explore My Projects'];
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < words[wordIndex].length) {
    headline.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 2000);
  }
}

function deleteEffect() {
  if (charIndex > 0) {
    headline.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 100);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  }
}

typeEffect();
