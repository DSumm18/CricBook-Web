import Navbar from './components/Navbar';
import WaitlistForm from './components/WaitlistForm';
import { theme } from './constants/theme';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <header className={`
        bg-cricket-dark-green text-white text-center py-20 px-4
      `}>
        <div className="container mx-auto max-w-4xl">
          <h1 className={`
            ${theme.typography.sizes.h1} 
            mb-6 leading-tight
          `}>
            The Social Network for Cricket
          </h1>
          <p className={`
            ${theme.typography.sizes.body} 
            mb-10 max-w-2xl mx-auto
          `}>
            Connect with your club, track your stats, rate the tea, and share your cricket life. 
            Built for players, clubs, and leagues.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </header>

      {/* Features Highlights */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className={`${theme.typography.sizes.h2} mb-12`}>
            Built for Cricket Lovers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Player Profiles', 
                description: 'Showcase your stats, achievements, and cricket journey',
                icon: '🏏'
              },
              { 
                title: 'Tea Ratings', 
                description: 'Rate and review match day teas. Because it matters!',
                icon: '☕'
              },
              { 
                title: 'Club Pages', 
                description: 'Connect with your local cricket club and community',
                icon: '🤝'
              }
            ].map((feature) => (
              <div 
                key={feature.title}
                className="bg-cricket-cream p-6 rounded-lg shadow-sm"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className={`${theme.typography.sizes.h3} mb-4`}>
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-cricket-light-green text-white">
        <div className="container mx-auto">
          <h2 className={`${theme.typography.sizes.h2} text-center mb-12`}>
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { 
                question: 'Is CricBook free?', 
                answer: 'Yes! We offer a free basic tier with the option to upgrade to Pro features.' 
              },
              { 
                question: 'What is the "Tea Rating" feature?', 
                answer: 'A fun way for cricketers to rate match day teas. Because every cricket lover knows the tea is as important as the game!' 
              },
              { 
                question: 'Can my club join?', 
                answer: 'Absolutely! We have special features for clubs, including team management and profile pages.' 
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white text-black p-6 rounded-lg"
              >
                <h3 className="font-semibold text-xl mb-2">
                  {faq.question}
                </h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`
        ${theme.colors.primary} text-white py-8 px-4
      `}>
        <div className="container mx-auto text-center">
          <p>&copy; 2026 CricBook. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a 
                key={link} 
                href={`/${link.toLowerCase()}`} 
                className="hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}