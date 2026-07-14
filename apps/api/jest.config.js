module.exports = {
  collectCoverageFrom: ['src/**/*.ts', '!src/main.ts', '!src/**/*.d.ts'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', { tsconfig: 'tsconfig.app.json' }],
  },
};
