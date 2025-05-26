import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitMessage('Thanks for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      details: "pawan@kumar.dev",
      link: "mailto:cnct.pawan@gmail.com"
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Phone",
      details: "+91 7061986482",
      link: "tel:+15551234567"
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Location",
      details: "Faridabad, Haryana, India",
      link: "https://maps.google.com/?q=Faridabad,+Haryana,+India",
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle font-serif">Let's discuss your next project</p>
          <p className="text-lg text-wood-dark/80 dark:text-wood-light/80">
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-1 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.title === "Location" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="wood-card p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-accent-primary/10 dark:bg-accent-secondary/10 rounded-md text-accent-primary dark:text-accent-secondary">
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-wood-dark dark:text-wood-light">{info.title}</h3>
                  <p className="text-wood-dark/80 dark:text-wood-light/80">{info.details}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className="wood-card p-6">
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-md">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-wood-dark dark:text-wood-light font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 bg-white/70 dark:bg-wood-darkest/50 rounded-md border ${errors.name ? 'border-red-500' : 'border-wood-light dark:border-wood-dark'
                        } focus:outline-none focus:ring-2 focus:ring-accent-primary dark:focus:ring-accent-secondary`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-wood-dark dark:text-wood-light font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 bg-white/70 dark:bg-wood-darkest/50 rounded-md border ${errors.email ? 'border-red-500' : 'border-wood-light dark:border-wood-dark'
                        } focus:outline-none focus:ring-2 focus:ring-accent-primary dark:focus:ring-accent-secondary`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-wood-dark dark:text-wood-light font-medium">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-white/70 dark:bg-wood-darkest/50 rounded-md border border-wood-light dark:border-wood-dark focus:outline-none focus:ring-2 focus:ring-accent-primary dark:focus:ring-accent-secondary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-wood-dark dark:text-wood-light font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 bg-white/70 dark:bg-wood-darkest/50 rounded-md border ${errors.message ? 'border-red-500' : 'border-wood-light dark:border-wood-dark'
                      } focus:outline-none focus:ring-2 focus:ring-accent-primary dark:focus:ring-accent-secondary`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;