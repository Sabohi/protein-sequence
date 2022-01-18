import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

// Mocks the Fullscreen API. This is needed for ToggleFullScreenButton.test.tsx.
Object.defineProperty(document, 'fullscreenEnabled', { value: true, writable: true });

// Mocks the HTMLMediaELements
window.HTMLMediaElement.prototype.load = () => {
  /* Returns nothing */
};
window.HTMLMediaElement.prototype.play = () => {
  /* Returns nothing */
};
window.HTMLMediaElement.prototype.pause = () => {
  /* Returns nothing */
};
window.HTMLMediaElement.prototype.addTextTrack = () => {
  /* Returns nothing */
};

// Mocks QB
Object.defineProperty(window, 'QB', {
  value: {
    logout: jest.fn(),
    chat: true,
    init: jest.fn(() => true),
    users: {},
    login: jest.fn(),
    createSession: jest.fn(),
  },
  writable: true,
  configurable: true,
  enumerable: true,
});

// Mock scrollTo function
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

// Mock URL Object
Object.defineProperty(window.URL, 'createObjectURL', { value: jest.fn(() => 'blob://test/abcd12345'), writable: true });

// Mock Windws History Object
Object.defineProperty(window.history, 'pushState', { value: jest.fn(), writable: true });
