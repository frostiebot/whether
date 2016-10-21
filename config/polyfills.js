if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

if (typeof localStorage === 'undefined' || typeof sessionStorage === 'undefined') {
    // It's insanely likely that if we don't have one, we won't have
    // the other, so mock them both.
    // Note: don't just assign `window.sessionStorage = window.localStorage`
    // as we want to mock browsers somewhat properly and both stores
    // are independent of each other.
    var storageMock = require('../src/util/storagemock').storageMock;
    window.localStorage = storageMock();
    window.sessionStorage = storageMock();
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');
