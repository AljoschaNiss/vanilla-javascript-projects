const { describe } = require("node:test");

// https://medium.com/rate-engineering/jest-testing-your-front-end-code-c73079269e8d
describe("localStorage.setItem() test", () => {
  test("2 + 2 is 4", () => {
    expect(2 + 2).toBe(4);
  });
});

// https://www.testingjavascript.com/lessons/jest-support-running-multiple-configurations-with-jest-s-projects-feature

// testEnvironment: 'jest-environment-node',
// testEnvironment: 'jest-environment-jsdom',
