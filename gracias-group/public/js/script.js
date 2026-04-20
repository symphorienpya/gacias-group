// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = getAnimationForElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  document.querySelectorAll('.feature-card, .team-member, .portfolio-item, .contact-item').forEach(el => {
    observer.observe(el);
  });

  function getAnimationForElement(element) {
    if (element.classList.contains('feature-card')) {
      return 'slideInUp 0.6s ease-out forwards';
    } else if (element.classList.contains('team-member')) {
      return 'scaleIn 0.6s ease-out forwards';
    } else if (element.classList.contains('portfolio-item')) {
      return 'slideInUp 0.6s ease-out forwards';
    }
    return 'fadeIn 0.6s ease-out forwards';
  }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        showNotification(data.message, 'success');
        contactForm.reset();
      } else {
        showNotification('Error sending message. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
      showNotification('Error sending message. Please try again.', 'error');
    }
  });
}

// Notification System
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('show');
  }, 10);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Scroll to section smooth animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add animation class on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)';
  } else {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  }
});
