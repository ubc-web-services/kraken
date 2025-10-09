import { test, expect } from '@playwright/test';
import { doLogin } from '../utils/helper.js';

test.describe('Generic Test Suite - reports/updates', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await doLogin(page, baseURL);
    await page.goto('/admin/reports/dblog');
  });

  test('Checks that the title loaded (fails if whitescreen)', async ({ page }) => {
    const title = page.locator('#block-claro-page-title');
    await expect(title).toContainText('Recent log messages');
  });
});