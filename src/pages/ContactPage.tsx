import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import backgroundImage from "../assets/images/planete4k.jpg";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  useEffect(() => {
    emailjs.init("K4qDdmVU7SoUjlLJb");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });

    try {
      await emailjs.send(
        'service_ivglnf1',
        'template_b6cxrpd',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'K4qDdmVU7SoUjlLJb'
      );

      setFormStatus({ submitting: false, success: true, error: false });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8" style={{ marginTop: '72px' }}>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-[600px] rounded-lg overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center">
          {<img
            src={backgroundImage}
            alt="Contact"
            className="absolute inset-0 w-full h-full object-cover"
          />}
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-light">
            <div className="text-center space-y-2">
              <div className="text-4xl mb-4">Contactez-moi</div>
              <p>N'hésitez pas à me contacter pour toute</p>
              <p>question ou proposition de collaboration.</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Contact
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formStatus.submitting}
              className={`w-full py-2 px-4 rounded-md text-white transition-colors ${
                formStatus.submitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {formStatus.submitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
            {formStatus.success && (
              <p className="text-green-600 text-center mt-4">
                Message envoyé avec succès !
              </p>
            )}
            {formStatus.error && (
              <p className="text-red-600 text-center mt-4">
                Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;