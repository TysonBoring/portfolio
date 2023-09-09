import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' }); // Clear any validation errors when typing
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      // Show loading state
      setIsLoading(true);

      try {
        // Simulate an asynchronous form submission, replace with your actual submission logic
        await submitFormAsync(formData);

        // Handle success
        setFormSubmitted(true);
        setIsLoading(false);
        // Clear the form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } catch (error) {
        // Handle submission error
        setIsLoading(false);
        console.error('Submission error:', error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const submitFormAsync = async (formData) => {
    // Simulate an API request or email sending here
    // Replace this with your actual asynchronous submission logic
    // Example: Sending a POST request to an API
    // const response = await fetch('your-api-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });

    // Handle the response or any errors here
  };

  return (
    <section id="contact" className="bg-gray-800 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Contact Me</h2>
        <p className="text-white text-lg mb-4">
          Have a question or want to work together? Fill out the form below, and I'll get back to you soon.
        </p>
        {formSubmitted ? (
          <p className="text-green-500 text-xl mb-4">Thank you for your message! I'll get back to you soon.</p>
        ) : (
          <form className="max-w-md mx-auto mt-12" onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full px-4 py-2 border rounded focus:outline-none ${
                  formErrors.name ? 'border-red-500' : 'focus:border-indigo-500'
                }`}
                required
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full px-4 py-2 border rounded focus:outline-none ${
                  formErrors.email ? 'border-red-500' : 'focus:border-indigo-500'
                }`}
                required
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full px-4 py-2 border rounded focus:outline-none resize-none ${
                  formErrors.message ? 'border-red-500' : 'focus:border-indigo-500'
                }`}
                required
              ></textarea>
              {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
            </div>
            <div className="mb-8">
              <button
                type="submit"
                className={`bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-300 ease-in-out ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
