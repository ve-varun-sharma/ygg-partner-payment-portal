import next from 'next';
// next({ dev: true });
import '@testing-library/jest-dom';
import 'jest-canvas-mock';
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom

// include this in your Jest setup file, or before your tests
jest.setTimeout(90000);