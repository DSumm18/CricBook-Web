import { useState } from 'react';
import Navbar from '../components/Navbar';
import WaitlistForm from '../components/WaitlistForm';
import { theme } from '../constants/theme';

export default function LeaguesPage() {
  const [clubCount, setClubCount] = useState(30);
  const [playerCount, setPlayerCount] = useState(600);
  const [commissionAmount, setCommissionAmount] = useState(119.70);

  const updateCalculator = (clubs: number) => {
    setClubCount(clubs);
    const players = clubs * 20; // Assuming 20 players per club
    const commission = players * 0.20; // £0.20 per player
    setPlayerCount(players);
    setCommissionAmount(Number((commission).toFixed(2)));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <header className={`
        bg-cricket-dark-green text-white text-center py-20 px-4
      `}>
        <div className="container mx-auto max-w-4xl">
          <h1 className={`
            ${theme.typography.sizes.h1} 
            mb-6 leading-tight
          `}>
            Partner with CricBook
          </h1>
          <p className={`
            ${theme.typography.sizes.body} 
            mb-10 max-w-2xl mx-auto
          `}>
            Grow your league, support your clubs, and earn commission by promoting CricBook.
          </p>
        </div>
      </header>

      <section className="py-16 px-4 bg-cricket-cream">
        <div className="container mx-auto">
          <h2 className={`
            ${theme.typography.sizes.h2} 
            text-center mb-12
          `}>
            How the Distribution Model Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: '🏆', 
                title: 'Free League Profile', 
                description: 'Get a full league profile when you promote CricBook to your clubs.' 
              },
              { 
                icon: '💰', 
                title: '10% Commission', 
                description: 'Earn £0.20 for every player who subscribes through your league.' 
              },
              { 
                icon: '📈', 
                title: 'Growth Driven', 
                description: 'More players mean more visibility and more commission.' 
              }
            ].map((item) => (
              <div 
                key={item.title}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className={`
            ${theme.typography.sizes.h2} 
            text-center mb-12
          `}>
            Revenue Calculator
          </h2>
          
          <div className="bg-cricket-cream p-8 rounded-lg">
            <div className="mb-6">
              <label htmlFor="clubCount" className="block mb-2">
                Number of Clubs in Your League
              </label>
              <input 
                type="range" 
                id="clubCount"
                min="10" 
                max="100" 
                value={clubCount}
                onChange={(e) => updateCalculator(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm mt-2">
                <span>10</span>
                <span>{clubCount} Clubs</span>
                <span>100</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg text-center">
              <p className="text-xl mb-2">Your League Potential</p>
              <p className="text-3xl font-bold text-cricket-medium-green">
                £{commissionAmount}/month
              </p>
              <p className="text-sm mt-2">
                {clubCount} Clubs × {playerCount} Players = {playerCount} Potential Subscriptions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cricket-light-green text-white">
        <div className="container mx-auto max-w-md text-center">
          <h2 className={`
            ${theme.typography.sizes.h2} 
            mb-12
          `}>
            Partner With Us
          </h2>
          <WaitlistForm />
        </div>
      </section>
    </div>
  );
}