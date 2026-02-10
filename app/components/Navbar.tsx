import Link from 'next/link';
import { theme } from '../constants/theme';

const Navbar = () => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/players', label: 'Players' },
    { href: '/clubs', label: 'Clubs' },
    { href: '/leagues', label: 'Leagues' },
    { href: '#waitlist', label: 'Waitlist' },
  ];

  return (
    <nav className={`
      sticky top-0 z-50 bg-white shadow-sm
      ${theme.colors.primary} text-white
    `}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span>CricBook</span>
        </Link>
        
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className="hover:text-cricket-light-green transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle would go here in a real-world scenario */}
      </div>
    </nav>
  );
};

export default Navbar;