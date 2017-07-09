import { LearnAngularCLIPage } from './app.po';

describe('learn-angular-cli App', () => {
  let page: LearnAngularCLIPage;

  beforeEach(() => {
    page = new LearnAngularCLIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
