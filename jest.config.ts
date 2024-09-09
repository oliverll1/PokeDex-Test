module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
    '\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '\\.(css|less|scss|sass)$': 'jest-transform-stub',
    '\\.(svg|png|jpg|jpeg|gif|webp)$': 'jest-transform-stub',
  },
  modulePathIgnorePatterns: ['<rootDir>/build/'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  verbose: true,
};
