import React, { useState } from 'react';
import { supabase } from '../config/supabase';

const CreateTournamentForm = () => {
  const [formData, setFormData] = useState({
    tournament_name: '',
    organizer: '',
    tournament_info: '',
    date: '',
    venue: '',
    prize: '',
    overs: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const dataToSubmit = {
      ...formData,
      prize: parseInt(formData.prize),
      overs: parseInt(formData.overs)
    };

    try {
      const { data, error } = await supabase
        .from('Tournaments')
        .insert([dataToSubmit]);

      if (error) throw error;
      
      console.log('New tournament added:', data);
      setFormData({
        tournament_name: '',
        organizer: '',
        tournament_info: '',
        date: '',
        venue: '',
        prize: '',
        overs: ''
      });
      alert('Tournament added successfully!');
    } catch (error) {
      console.error('Error adding tournament:', error.message);
      alert('Failed to add tournament. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Create Tournament</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {Object.keys(formData).map((key) => (
          <div key={key} className="relative">
            <label
              htmlFor={key}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </label>
            <input
              type={key === 'date' ? 'date' : key === 'prize' || key === 'overs' ? 'number' : 'text'}
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        ))}
        <div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out hover:scale-105"
          >
            Add Tournament
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTournamentForm;