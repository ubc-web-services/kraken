import { test, expect } from '@playwright/test';
import { doLogin } from '../utils/helper.js';

test.describe('Generic Test Suite - adds a content block', () => {

  test.beforeEach(async ({ page, baseURL }) => {
    await doLogin(page, baseURL);
    await page.goto('/block/add/basic');
  });

  test('Types in the description and body boxes', async ({ page }) => {
    const descriptionMessage = 'Playwright Test Basic Block';
    const bodyMessage = 'Playwright body text';

    // Type title
    const titleInput = page.locator('[data-drupal-selector="edit-info-wrapper"] input');
    await titleInput.fill(descriptionMessage);
    await expect(titleInput).toHaveValue(descriptionMessage);

    // Locate CKEditor editable area by class + role
    const ckEditor = page.locator('#edit-body-wrapper .ck[role="textbox"]');

    // Focus and type text (equivalent to realClick + realType)
    await ckEditor.click();
    await page.keyboard.type(bodyMessage, { delay: 0 });

    // Verify CKEditor content using its API
    const editorData = await ckEditor.evaluate(el => el.ckeditorInstance.getData());
    await expect(editorData).toContain(bodyMessage);

    // Save changes
    await page.locator('[data-drupal-selector="edit-submit"]').click();

    // Verify the page content
    const primaryContent = page.locator('#primary-content');
    await expect(page.locator('.page-title')).toContainText('Content blocks');
  });

});