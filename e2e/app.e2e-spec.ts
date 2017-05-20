import { TestGithubPage } from './app.po';

describe('test-github App', () => {
  let page: TestGithubPage;

  beforeEach(() => {
    page = new TestGithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
