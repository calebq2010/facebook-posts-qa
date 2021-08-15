/* eslint-disable no-undef */
describe('facebook post tests', function() {

    before(browser => browser.url('http://localhost:3000'));
  
    test('Confirm the main post element renders', function (browser) {
      browser
        .waitForElementVisible('body')
        .assert.visible('input[placeholder="What is on your mind?"]')
    });
  
    after(browser => browser.end());
  });
  