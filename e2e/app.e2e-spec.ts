import { EnglishCastlesPage } from './app.po';

describe('english-castles App', () => {
  let page: EnglishCastlesPage;

  beforeEach(() => {
    page = new EnglishCastlesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
