import { test, expect } from '@playwright/test';
import { doLogin } from '../utils/helper.js';

test.describe('Generic Test Suite - adds a basic page', () => {

  test.beforeEach(async ({ page, baseURL }) => {
    await doLogin(page, baseURL);
    await page.goto('/node/add/page');
  });

  test('Types in the title and body boxes', async ({ page }) => {
    const titleMessage = 'Playwright Test Basic Page';
    const bodyMessage = 'Playwright body text';

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

    // Save changes
    await page.locator('[data-drupal-selector="edit-submit"]').click();

    // Verify the page content
    const primaryContent = page.locator('.field--name-body.field__item p');
    await expect(primaryContent).toContainText(titleMessage);
    await expect(primaryContent).toContainText(bodyMessage);
  });

});