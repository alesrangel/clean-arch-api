export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts',
    'src/**/*.{ts,tsx}',
  '!src/**/*.d.ts',
  '!src/**/protocols/**', 
  '!src/**/index.ts',
  "!src/**/**/**/signup-protocols.ts",
  "!src/**/**/**/db-add-account-protocols.ts"
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  }
}