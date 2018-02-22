import { UploadfilesPage } from './app.po';

describe('uploadfiles App', function() {
  let page: UploadfilesPage;

  beforeEach(() => {
    page = new UploadfilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
