import { test, expect } from '@playwright/test';

test.describe('CLF Mobile Header Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 414, height: 896 }); // iPhone XR
  });

  test('contains ubc header', async ({ page }) => {
    await expect(page.locator('#ubc7-header')).toBeVisible();
  });

  test('contains ubc header top border', async ({ page }) => {
    await expect(page.locator('#ubc7-header')).toHaveCSS('border-top', '3px solid rgb(0, 33, 69)');
  });

  test('ubc logo and banner redirects to ubc.ca', async ({ page }) => {
    await expect(page.locator('#ubc7-logo a')).toHaveAttribute('href', 'https://www.ubc.ca');
    await expect(page.locator('#ubc7-wordmark a')).toHaveAttribute('href', 'https://www.ubc.ca');
  });

  test('test header global search button', async ({ page }) => {
    await page.locator('[data-bs-target="#ubc7-global-menu"]').click();
  });

  test('test number of links in header', async ({ page }) => {
    await page.locator('[data-bs-target="#ubc7-global-menu"]').click();
    const linkContainer = page.locator('#ubc7-global-header > .row-fluid > .offset2 > .reverse');
    await expect(linkContainer).toBeVisible();
    await expect(linkContainer.locator('> *')).toHaveCount(8); // children count
  });

  test('contains ubc unit', async ({ page }) => {
    await expect(page.locator('#ubc7-unit-name')).toBeVisible();
  });

  test('test ubc unit redirection', async ({ page, baseURL }) => {
    await page.locator('#ubc7-unit-name').click();
    await expect(page).toHaveURL(baseURL);
  });

  test('contains ubc unit menu nav bar', async ({ page }) => {
    await page.locator('[data-bs-target="#ubc7-unit-navigation"]').click();
    await expect(page.locator('#ubc7-unit-menu')).toBeVisible();
  });

});
