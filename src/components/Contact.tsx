// import axios, { AxiosResponse } from "axios";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    tel: "",
    subject: "Contact Form Message Ajout d'un sujet par défaut", // Ajout d'un sujet par défaut
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      console.log(formData);
      
      const response = await axios.post("https://api-bilanga-women.onrender.com/api/contact", JSON.stringify(formData), {headers: {
        'Content-Type': 'application/json'
      } });
      console.log(response)
      setResponseMessage("Votre message a été envoyé avec succès !");
    } catch (error: any) {
      console.error(error);
      setResponseMessage("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">NOUS CONTACTER</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 outline-none focus-within:border-green-500 focus-within:border-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 outline-none focus-within:border-green-500 focus-within:border-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Télephone</label>
              <input
                type="tel"
                id="tel"
                value={formData.tel}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 outline-none focus-within:border-green-500 focus-within:border-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 outline-none focus-within:border-green-500 focus-within:border-2"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
              </button>
            </div>
          </form>
          {responseMessage && (
            <p className="mt-4 text-center text-sm text-gray-700">{responseMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;