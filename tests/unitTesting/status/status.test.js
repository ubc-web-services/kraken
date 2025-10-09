import { test, expect } from '@playwright/test';
import { doLogin, compareVersions } from '../utils/helper.js'; // assumes you port cy.doLogin + cy.compareVersions

// Variables to compare versions
// ------------------------------------------------------------
const minDrupalVersion = [9, 5, 0];     // Drupal version 9.5.0
const maxDrupalVersion = [11, 2, 5];    // Drupal version 11.2.0
const minPHPVersion = [8, 1, 0];        // PHP version 8.1.0
const maxPHPVersion = [8, 5, 0];        // PHP version 8.5.0
// ------------------------------------------------------------

test.describe('Generic Test Suite - Status Page', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await doLogin(page, baseURL);
    await page.goto('/admin/reports/status');
  });

  test('Can access status page', async ({ page }) => {
    await expect(page.locator('.page-title')).toContainText('Status report');
  });

  test('Checks Drupal version is within range', async ({ page }) => {
    const versionText = await page
      .locator('.system-status-general-info__items > :nth-child(1)')
      .innerText();

    // Extract after "Version"
    const version = versionText.split('Version')[1].trim();
    compareVersions(version, minDrupalVersion, maxDrupalVersion);
  });

  test('Checks PHP version is within range', async ({ page }) => {
    const versionText = await page
      .locator('.system-status-general-info__items > :nth-child(4)')
      .innerText();

    // Extract x.y.z
    const version = versionText.match(/\d+\.\d+\.\d+/)[0];
    compareVersions(version, minPHPVersion, maxPHPVersion);
  });

  // TODO: There are always errors and warnings!
//   test('Checks if there are errors', async ({ page }) => {
//     await expect(
//       page.locator('.system-status-report-counters > :nth-child(1)')
//     ).toHaveText(/0 Errors/);
//   });

//   test('Checks if there are warnings', async ({ page }) => {
//     await expect(
//       page.locator('.system-status-report-counters > :nth-child(2)')
//     ).toHaveText(/0 Warnings/);
//   });

  test('Checks that PHP APCu is enabled', async ({ page }) => {
    const apcuRow = page
      .locator('.system-status-report__row')
      .filter({ has: page.locator('.system-status-report__status-title', { hasText: 'PHP APCu caching' }) });

    const value = (await apcuRow.locator('.system-status-report__entry__value').innerText()).trim();
    console.log('PHP APCu:', value);
    expect(value).toMatch(/^Enabled/);
  });
});
