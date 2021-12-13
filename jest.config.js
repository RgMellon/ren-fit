module.exports = {
  preset: "jest-expo",
  testPathIgnorePatterns: ["/node_modules/", "/documentation/"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components",
  ],
};
