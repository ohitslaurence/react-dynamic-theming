module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        negative: 'var(--color-negative)',
        positive: 'var(--color-positive)',
        'primary-background': 'var(--background-primary)',
        'sec-background': 'var(--background-sec)',
        'text-primary': 'var(--color-text-primary)',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  variants: {},
  plugins: [],
};
