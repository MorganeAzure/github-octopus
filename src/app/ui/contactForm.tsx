"use client"
import React, { useState } from 'react';

export default function ContactForm(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full m-6 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">Téléphone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="company" className="block text-gray-700">Société</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </div>
      <button type="submit" className="w-xl p-4 bg-blue-600 text-xl text-white rounded shadow">
        Envoyer
      </button>
    </form>
  );
};
