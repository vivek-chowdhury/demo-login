import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Login');
  });

  it('should populate username', () => {
    page.getUserNameElements().sendKeys('admin');
    expect(page.getUserNameElementsValue())
    .toBe('admin');
  });

  it('should populate password', () => {
    page.getPasswordElements().sendKeys('admin');
    expect(page.getPasswordElementsValue())
    .toBe('admin');
  });

  it('should navigate user to dashboard screen', () => {
    page.getUserNameElements().sendKeys('admin');
    page.getPasswordElements().sendKeys('admin');
    page.getLoginButtonElements().click();
    expect(page.getDashboardTag()).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
