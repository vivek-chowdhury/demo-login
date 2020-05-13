import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root h2')).getText() as Promise<string>;
  }

  getUserNameElements() {
    return element(by.id('mat-input-0'));
  }

  getUserNameElementsValue() {
    return element(by.id('mat-input-0')).getAttribute('value');
  }

  getPasswordElements() {
    return element(by.id('mat-input-1'));
  }

  getPasswordElementsValue() {
    return element(by.id('mat-input-1')).getAttribute('value');
  }

  getLoginButtonElements() {
    return element(by.id('login-btn'));
  }

  getDashboardTag() {
    return element(by.tagName('app-dashboard'));
  }

  getDashboardTitle() {
    return element(by.css('dashboard-wlc-title')).getText() as Promise<string>;
  }
}
