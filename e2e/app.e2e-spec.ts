import { GetITPage } from './app.po';

describe('get-it App', () => {
  let page: GetITPage;

  beforeEach(() => {
    page = new GetITPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
