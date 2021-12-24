module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: ["/node_modules/", "/documentation/"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx",
    "!src/routes/*.tsx",
  ],
  coverageReporters: ["lcov"],
};
