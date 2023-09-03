// next.config.js
const withPWA = require('next-pwa');

module.exports = (phase, { defaultConfig }) => {
  return withPWA({
    pwa: {
      dest: 'public',
      register: true,
    },
    // Resto de las configuraciones de Next.js aquí (por ejemplo, reactStrictMode, webpack, etc.)
    // ...
  });
};
