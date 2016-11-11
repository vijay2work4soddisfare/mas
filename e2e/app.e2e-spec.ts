import { SmsTestingPage } from './app.po';

describe('sms-testing App', function() {
  let page: SmsTestingPage;

  beforeEach(() => {
    page = new SmsTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
