import { test, expect } from '@playwright/test';
import { doLogin } from '../utils/helper.js';

test.describe('Generic Test Suite - adds a content block', () => {

  test.beforeEach(async ({ page, baseURL }) => {
    await doLogin(page, baseURL);
  });

  const pageURL = '/test'

  test('Create a basic page and place a block', async ({ page }) => {
    await page.goto(pageURL);
    const titleMessage = 'Playwright Test Basic Page';
    const bodyMessage = 'Playwright body text';
    const text = await page.locator('#main-content').first().textContent();

    if (text?.includes('404')) {
        await page.goto('/node/add/page');

        // Type title
        const titleInput = page.locator('[data-drupal-selector="edit-title-wrapper"] input');
        await titleInput.fill(titleMessage);
        await expect(titleInput).toHaveValue(titleMessage);

        // Locate CKEditor editable area by class + role
        const ckEditor = page.locator('#edit-body-wrapper .ck[role="textbox"]');

        // Focus and type text (equivalent to realClick + realType)
        await ckEditor.click();
        await page.keyboard.type(bodyMessage, { delay: 0 });

        // Verify CKEditor content using its API
        const editorData = await ckEditor.evaluate(el => el.ckeditorInstance.getData());
        await expect(editorData).toContain(bodyMessage);

        // Publish the content type
        const status = page.locator('[data-drupal-selector="edit-status-value"]');
        await status.check();

        // Add alias
        await page.locator('[data-drupal-selector="edit-path-0"]').click();
        await page.fill('[data-drupal-selector="edit-path-0-alias"]', pageURL);

        // Save changes
        await page.locator('[data-drupal-selector="edit-submit"]').click();
        
    } else {
        console.log('Page already exists. Skipping creation.');
    }

    // Verify the page content
    await expect(page.locator('#block-kraken-mainpagecontent')).toContainText(bodyMessage);

    // Place block
    await page.goto('/admin/structure/block');
    await page.locator('[data-drupal-selector="edit-blocks-region-content-title"]').click();

    // Verify Place block UI
    await expect(page.locator('h1.ui-dialog-title', { hasText: 'Place block' })).toBeVisible();
    await page.locator('tr:has-text("Recent content") a:has-text("Place block")').click();

    // Verify and Configure block
    await expect(page.locator('h1.ui-dialog-title', { hasText: 'Configure block' })).toBeVisible();
    await page.locator('a.vertical-tabs__menu-link >> text=Pages').click();
    await page.fill('[data-drupal-selector="edit-visibility-request-path-pages"]', pageURL);

    // Save block
    await page.locator('button:has-text("Save block")').click();

    // Verify block
    await page.goto(pageURL);
    await expect(page.locator('#block-kraken-views-block-content-recent-block-1 h3')).toHaveText('Recent content');
  });
});