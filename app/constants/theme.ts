export const theme = {
  colors: {
    primary: '#1B5E20',      // Deep green
    secondary: '#4CAF50',    // Medium green
    tertiary: '#81C784',     // Light green
    background: '#F0F4F0',   // Light background
    text: '#333333',
    white: '#FFFFFF',
    cream: '#F5F5DC',
    lightGray: '#F5F5F5',
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    sizes: {
      h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
      h2: 'text-3xl md:text-4xl font-semibold',
      h3: 'text-2xl md:text-3xl font-semibold',
      body: 'text-base md:text-lg',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
  },
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  },
};