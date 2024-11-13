import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  [key: string]: string; // Index signature to allow arbitrary keys
}

const Contact: React.FC = () => {

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes with proper typing
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission with proper typing
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage('');

    // Accessing environment variables using Vite's import.meta.env
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debugging: Log the variables and form data
    console.log('Service ID:', serviceID);
    console.log('Template ID:', templateID);
    console.log('Public Key:', publicKey);
    console.log('Form Data:', formData);

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatusMessage('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-b from-slate-700 to-slate-200 px-4 pb-[10vh]"
    >
      <h1 className='text-6xl text-center md:text-7xl font-semibold text-white mb-[9vh] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Contact</h1>
      <div className='flex flex-col md:flex-row  mx-[5vw] gap-[5vw]'>
        <div className='text-white flex flex-col justify-center items-center'>
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-white drop-shadow-[0_3.3px_3.2px_rgba(0,0,0,0.8)]">
            I'd love to hear from you!
          </h2>
            <p className='text-xl  text-center text-wrap drop-shadow-[0_3.3px_3.2px_rgba(0,0,0,0.8)]'>Contact me through this form, I am interested in hearing from you,
            knowing your ideas and contributing to your projects with my work.
            Need a Frontend developer? Contact me!
            </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col min-w-[45vw]  p-6 rounded-lg shadow-sm"
        >
          <label className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 drop-shadow-[0_3.3px_3.2px_rgba(0,0,0,0.8)]"
              placeholder="Your Name"
            />
          </label>

          <label className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 drop-shadow-[0_3.3px_3.2px_rgba(0,0,0,0.8)]"
              placeholder="Your Email"
            />
          </label>

          <label className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5} 
              className="w-full mt-2 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 drop-shadow-[0_3.3px_3.2px_rgba(0,0,0,0.8)]"
              placeholder="Your Message"
            ></textarea>
          </label>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors drop-shadow-[0_3.3px_3.2px_rgba(0,0,0,0.8)]"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>

          {statusMessage && (
            <p className="mt-4 text-center text-gray-200">{statusMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
