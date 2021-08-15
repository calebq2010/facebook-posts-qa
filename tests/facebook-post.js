/* eslint-disable no-undef */
describe('facebook post tests', function() {
    const mainPostElement = 'section[data-testid="main-post-section"]'

    before(browser => 
        browser.url('http://localhost:3000')
    );
  
    test('Confirm the main post element renders', function (browser) {
      browser
        .waitForElementVisible(mainPostElement)
        .assert.visible('input[placeholder="What is on your mind?"]')
    });

    test('Confirm the main post profile picture is present', function (browser) {
        browser
          .waitForElementVisible(mainPostElement)
          .assert.visible('img[data-testid="profile-picture"]')
    });

    test('Confirm when I enter a value in the input and post it, it creates post', function (browser) {
        const postValue = 'This is Calebs test input from nightwatch!'

        browser
            .assert.visible('input[type=text')
            .setValue('input[type=text]', postValue)
            .assert.visible('button[data-testid="post-btn"]')
            .click('button[data-testid="post-btn"]')
            .assert.visible('section[data-testid="post"]')
            .assert.containsText('p[data-testid="post-value"]', postValue)
            .pause(2000)
    })
  
    after(browser => browser.end());
  });
  