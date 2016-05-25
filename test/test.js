describe('Protractor Demo App', function() {
  it('should add one and two', function() {
    browser.get('http://localhost:8080/#/');
    expect(browser.getTitle()).toEqual('Acquisio Self Serve Signup');
    element(by.id('step1Next')).click();
    var adwCard = element(by.css('.adwords-logo'));

    expect(adwCard.isDisplayed()).toBeFalsy();
  });
});