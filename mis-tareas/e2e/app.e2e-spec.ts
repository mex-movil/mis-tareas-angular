import { MisTareasPage } from './app.po';

describe('mis-tareas App', function() {
  let page: MisTareasPage;

  beforeEach(() => {
    page = new MisTareasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
