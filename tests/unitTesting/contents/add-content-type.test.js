import { test, expect } from '@playwright/test';
import { doLogin } from '../utils/helper.js';

test.describe('Generic Test Suite - adds a content type', () => {

  test.beforeEach(async ({ page, baseURL }) => {
    await doLogin(page, baseURL);
    await page.goto('/admin/structure/types');
  });

  test('Types in the name and description boxes', async ({ page }) => {
    const title = `Playwright-${Date.now()}`;
    const description = 'Playwright description text';

    await page.goto('/admin/structure/types/add');

    // Type Name
    await page.fill('[data-drupal-selector="edit-name"]', title);

    // Type Description
    await page.fill('[data-drupal-selector="edit-description"]', description);

    // Save changes
    await page.locator('[data-drupal-selector="edit-save-continue"]').click();

    // Verify the page content
    await expect(page.locator('#block-claro-page-title')).toContainText('Manage fields');
  });

});