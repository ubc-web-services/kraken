import { test, expect } from '@playwright/test';
import { doLogin } from '../utils/helper.js';

test.describe('Generic Test Suite - adds a content type', () => {

  test.beforeEach(async ({ page, baseURL }) => {
    await doLogin(page, baseURL);
    await page.goto('/admin/structure/types/add');
  });

  test('Types in the name and description boxes', async ({ page }) => {
    const title = 'Playwright Content Type';
    const description = 'Playwright description text';

    await page.goto('/admin/structure/types');
    const titles = await page.locator('#block-claro-content .menu-label').allTextContents();
    const exists = titles.some(name => name.includes(title));

    if (exists) {
        console.log('Content type already exists. Skipping creation.');
    } else {

      // Type Name
      await page.fill('[data-drupal-selector="edit-name"]', title);

      // Type Description
      await page.fill('[data-drupal-selector="edit-description"]', description);

      // Add alias
      await page.locator('[data-drupal-selector="edit-path-0"]').click();
      await page.fill('[data-drupal-selector="edit-path-0-alias"]', `/"${title}"`);

      // Save changes
      await page.locator('[data-drupal-selector="edit-save-continue"]').click();
    }

    // Verify the page content
    const contentTypes = await page.locator('#block-claro-content .menu-label').allTextContents();
    await expect(contentTypes.some(name => name.includes(title))).toBe(true);

  });

});