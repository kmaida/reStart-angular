import { ReStartAngularPage } from './app.po';

describe('re-start-angular App', () => {
  let page: ReStartAngularPage;

  beforeEach(() => {
    page = new ReStartAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
