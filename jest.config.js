module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.ts',
    '^~pages/(.*)': '<rootDir>/src/pages/$1',
    '^~components/(.*)': '<rootDir>/src/components/$1',
    '^~hooks/(.*)': '<rootDir>/src/hooks/$1'
  }
};
