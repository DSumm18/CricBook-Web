import Navbar from '../components/Navbar';
import WaitlistForm from '../components/WaitlistForm';
import { theme } from '../constants/theme';

const PricingCard = ({ title, price, features, recommended = false }) => (
  <div 
    className={`
      p-6 rounded-lg shadow-md 
      ${recommended ? 'border-4 border-cricket-medium-green' : 'border'}
    `}
  >
    {recommended && (
      <div className="bg-cricket-medium-green text-white text-center py-1 mb-4">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <div className="text-4xl font-bold mb-4">£{price}/month</div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2">✅</span>
          {feature}
        </li>
      ))}
    </ul>
    <button 
      className={`
        w-full py-3 rounded-lg 
        ${recommended ? 'bg-cricket-medium-green text-white' : 'border'}
        hover:opacity-90 transition-opacity
      `}
    >
      {recommended ? 'Get Pro' : 'Select Plan'}
    </button>
  </div>
);

export default function ClubsPage() {
  const pricingPlans = [
    {
      title: 'Basic',
      price: '9.99',
      features: [
        'Club profile page',
        'Player roster management',
        'Basic team events'
      ],
      recommended: false
    },
    {
      title: 'Pro',
      price: '24.99',
      features: [
        'Everything in Basic',
        'Website integration',
        'Advanced team analytics',
        'Priority listing'
      ],
      recommended: true
    },
    {
      title: 'Premium',
      price: '49.99',
      features: [
        'Everything in Pro',
        'Match scoring tools',
        'Recruitment features',
        'Advanced stat dashboards'
      ],
      recommended: false
    }
  ];

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
            Why Your Club Needs CricBook
          </h1>
          <p className={`
            ${theme.typography.sizes.body} 
            mb-10 max-w-2xl mx-auto
          `}>
            Transform your club's digital presence. Manage teams, connect players, 
            and build a strong community with CricBook.
          </p>
        </div>
      </header>

      <section className="py-16 px-4 bg-cricket-cream">
        <div className="container mx-auto">
          <h2 className={`
            ${theme.typography.sizes.h2} 
            text-center mb-12
          `}>
            Pricing Plans
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <PricingCard 
                key={plan.title}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                recommended={plan.recommended}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className={`
              ${theme.typography.sizes.h3}
              mb-6
            `}>
              Gamified Upgrade: Go Pro for Free!
            </h3>
            <p className="max-w-2xl mx-auto mb-8">
              Get enough players to subscribe to Pro, and your club automatically 
              upgrades to Pro features at no cost. Incentivize your players, 
              save on subscription fees!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-md">
          <h2 className={`
            ${theme.typography.sizes.h2} 
            text-center mb-12
          `}>
            Register Your Club
          </h2>
          <WaitlistForm />
        </div>
      </section>
    </div>
  );
}