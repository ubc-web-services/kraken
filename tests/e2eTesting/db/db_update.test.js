import { test, expect } from '@playwright/test';
import { doLogin } from '../utils/helper.js';

test.describe('Generic Test Suite - reports/updates', () => {
  // Ignore JS errors on the page (equivalent to Cypress.on('uncaught:exception'))
  test.beforeEach(async ({ page, baseURL }) => {
    page.on('pageerror', (err) => {
      console.log('Ignored page error:', err.message);
    });

    // Login before each test
    await doLogin(page, baseURL);
  });

  test('checks whether database needs an update', async ({ page }) => {
    await page.goto('/update.php');

    // Click the button
    await page.locator('.button').click();

    // Check for "No pending updates."
    const msg = page.locator('.messages-list__item.messages.messages--status .messages__content');
    await expect(msg).toContainText('No pending updates.');
  });
});
