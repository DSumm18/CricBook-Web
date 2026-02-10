'use client';

import { useState, FormEvent } from 'react';
import { theme } from '../constants/theme';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const roles = [
    { value: 'player', label: 'Player' },
    { value: 'club', label: 'Club' },
    { value: 'league', label: 'League' },
    { value: 'coach', label: 'Coach' },
    { value: 'parent', label: 'Parent' },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !role) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, role })
      });

      if (response.ok) {
        setSubmitted(true);
        setError('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className={`
        bg-cricket-medium-green text-white 
        p-8 rounded-lg text-center
      `}>
        <h3 className="text-2xl font-bold mb-4">🏏 Thanks for joining!</h3>
        <p>We'll send you an email when CricBook launches.</p>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto space-y-4"
    >
      <div>
        <label 
          htmlFor="email" 
          className="block mb-2 text-sm font-medium"
        >
          Email Address
        </label>
        <input 
          type="email" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@example.com"
          required
          className="w-full px-4 py-2 border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-cricket-medium-green"
        />
      </div>

      <div>
        <label 
          htmlFor="role" 
          className="block mb-2 text-sm font-medium"
        >
          Your Role
        </label>
        <select 
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-cricket-medium-green"
        >
          <option value="">Select your role</option>
          {roles.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <div className="text-red-500 text-sm">
          {error}
        </div>
      )}

      <button 
        type="submit"
        className={`
          w-full py-3 rounded-lg 
          ${theme.colors.primary} text-white
          hover:opacity-90 transition-opacity
          font-semibold
        `}
      >
        Join the Waitlist
      </button>
    </form>
  );
};

export default WaitlistForm;