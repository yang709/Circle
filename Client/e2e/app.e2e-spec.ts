import { CirclePage } from './app.po';

describe('Circle App', () => {
  let page: CirclePage;

  beforeEach(() => {
    page = new CirclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
