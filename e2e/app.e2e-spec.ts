import { JGAstorePage } from './app.po';

describe('jgastore App', () => {
  let page: JGAstorePage;

  beforeEach(() => {
    page = new JGAstorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
