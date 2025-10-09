import { test, expect } from '@playwright/test';

test.describe('CLF Footer Test Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1920, height: 1080 }); // Full HD
  });

  test('contains ubc unit footer', async ({ page }) => {
    await expect(page.locator('#unit-footer')).toBeVisible();
  });

  test('contains ubc back to the top', async ({ page }) => {
    await expect(page.locator('#totop')).toBeVisible();
  });

  test('ubc back to the top interactivity test', async ({ page }) => {
    await page.locator('#totop').click();
    await expect(page).not.toHaveURL(/\/#$/); // ensure URL does not end with /#
    await expect(page.locator('#ubc7-header')).toBeVisible();
  });

  test('contains ubc footer', async ({ page }) => {
    await expect(page.locator('#ubc7-global-footer')).toBeVisible();
  });

  test('test ubc global footer color and height', async ({ page }) => {
    const footer = page.locator('#ubc7-global-footer');
    await expect(footer).toHaveCSS('background-color', 'rgb(0, 33, 69)');
    
    const box = await footer.boundingBox();
    expect(box?.height).toBeGreaterThan(100);
  });

  test('contains ubc minimal footer', async ({ page }) => {
    await expect(page.locator('#ubc7-minimal-footer')).toBeVisible();
  });

  test('test ubc minimal footer css and height', async ({ page }) => {
    const minimalFooter = page.locator('#ubc7-minimal-footer');
    await expect(minimalFooter).toHaveCSS('background-color', 'rgb(0, 33, 69)');
    await expect(minimalFooter).toHaveCSS('padding-top', '20px');
  });

});
