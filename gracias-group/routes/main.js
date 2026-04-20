const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/services', (req, res) => {
  res.render('services');
});

router.get('/team', (req, res) => {
  res.render('team');
});

router.get('/portfolio', (req, res) => {
  res.render('portfolio');
});

router.get('/contact', (req, res) => {
  res.render('contact');
});

// Contact form submission
router.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Here you would typically send an email or save to database
  console.log('Contact form submission:', { name, email, subject, message });
  
  res.json({ success: true, message: 'Thank you for your message! We will get back to you soon.' });
});

module.exports = router;
