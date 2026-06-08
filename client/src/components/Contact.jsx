import { useState, useEffect, useRef } from 'react';

// API URL - uses proxy in development, env variable in production
const API_URL = import.meta.env.VITE_API_URL || '/api/contact';

function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Client-side form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name cannot exceed 100 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message cannot exceed 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: data.message || 'Message sent successfully!',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Failed to send message. Please try again.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to connect to server. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="container">
        <h2 className="section__title fade-in">Contact Me</h2>
        <p className="section__subtitle fade-in">
          Have a question or want to work together? Send me a message!
        </p>

        <div className="contact__wrapper fade-in">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-group__label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`form-group__input ${errors.name ? 'form-group__input--error' : ''}`}
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <span className="form-group__error">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-group__label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-group__input ${errors.email ? 'form-group__input--error' : ''}`}
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="form-group__error">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-group__label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={`form-group__input form-group__textarea ${errors.message ? 'form-group__input--error' : ''}`}
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <span className="form-group__error">{errors.message}</span>
              )}
            </div>

            {status.message && (
              <div className={`form-status form-status--${status.type}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn btn--primary btn--full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="contact__info">
            <div className="contact__info-card">
              <span className="contact__info-icon">📧</span>
              <h3>Email</h3>
              <p>manoranjan@email.com</p>
            </div>
            <div className="contact__info-card">
              <span className="contact__info-icon">📍</span>
              <h3>Location</h3>
              <p>India</p>
            </div>
            <div className="contact__info-card">
              <span className="contact__info-icon">💼</span>
              <h3>Availability</h3>
              <p>Open to opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
