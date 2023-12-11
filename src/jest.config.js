// jest.config.js
module.exports = {
    // ... other Jest configurations
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.mjs$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!esm)/', // ignore everything in node_modules except 'esm'
    ],
    setupFiles: ['esm'],
  };
  