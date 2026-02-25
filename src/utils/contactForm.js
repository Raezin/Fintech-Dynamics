// utils/contactForm.js
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit form');
    }

    return { 
      success: true, 
      message: data.message || 'Thank you for contacting us. We will respond within 24 hours.' 
    };
    
  } catch (error) {
    console.error('Form submission error:', error);
    return { 
      success: false, 
      message: error.message || 'Failed to send message. Please try again or email us directly at info@fintechdynamics.co' 
    };
  }
};

export const validateForm = (formData) => {
  const errors = {};
  
  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.service) {
    errors.service = 'Please select a service';
  }
  
  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
};