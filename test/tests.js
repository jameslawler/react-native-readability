var assert = require('assert');
var htmlCleaner = require('../index');

describe('when cleaning html', function() {
  describe('and source url is not provided', function() {
    it('should reject promise', function() {
      return htmlCleaner.cleanHtml('<html></html>')
        .then(() => {
          assert.fail('Should have thrown error');
        })
        .catch((error) => {
          assert.equal(error.message, 'Invalid or no source url provided');
        });
    });
  });
  describe('and source url is empty', function() {
    it('should reject promise', function() {
      return htmlCleaner.cleanHtml('<html></html>', '')
        .then(() => {
          assert.fail('Should have thrown error');
        })
        .catch((error) => {
          assert.equal(error.message, 'Invalid or no source url provided');
        });
    });
  });
  describe('and source url is invalid', function() {
    it('should reject promise', function() {
      return htmlCleaner.cleanHtml('<html></html>', 'thisisnotaurl')
        .then(() => {
          assert.fail('Should have thrown error');
        })
        .catch((error) => {
          assert.equal(error.message, 'Invalid or no source url provided');
        });
    });
  });
  describe('and html is not provided', function() {
    it('should reject promise', function() {
      return htmlCleaner.cleanHtml(undefined)
        .then(() => {
          assert.fail('Should have thrown error');
        })
        .catch((error) => {
          assert.equal(error.message, 'Invalid or no html provided');
        });
    });
  });
  describe('and html is empty', function() {
    it('should reject promise', function() {
      return htmlCleaner.cleanHtml('', 'http://example.com')
        .then(() => {
          assert.fail('Should have thrown error');
        })
        .catch((error) => {
          assert.equal(error.message, 'Invalid or no html provided');
        });
    });
  });
  describe('and html is invalid', function() {
    it('should reject promise', function() {
      return htmlCleaner.cleanHtml('no html', 'http://example.com')
        .then(() => {
          assert.fail('Should have thrown error');
        })
        .catch((error) => {
          assert.equal(error.message, 'Unable to clean HTML');
        });
    });
  });
});