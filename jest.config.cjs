module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub'
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};
