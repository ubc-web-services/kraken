import { expect } from '@playwright/test';
import { exec } from 'child_process';
import util from 'util';
// import dotenv from 'dotenv';
// dotenv.config();

const execAsync = util.promisify(exec);

/**
 * Compare versions
 *  - version: current version (string) e.g. "9.5.0"
 *  - minV: minimum version array [9, 5, 0]
 */
export function compareVersions(version, minV) {
  const [int0, int1, int2] = version.split('.').map(Number);

  const meetsMinimum =
    (int0 > minV[0]) ||
    (int0 === minV[0] && int1 > minV[1]) ||
    (int0 === minV[0] && int1 === minV[1] && int2 >= minV[2]);

  if (meetsMinimum) {
    console.log(`Version ${version} meets minimum version ${minV.join('.')}`);
  } else {
    console.log(`Version ${version} does NOT meet minimum version ${minV.join('.')}`);
  }

  expect(meetsMinimum).toBe(true);
}

/**
 * Runs drush command via DDEV
 */
export async function drush(command) {
  const { stdout } = await execAsync(`ddev drush ${command}`);
  console.log(stdout);
  return stdout.trim();
}

/**
 * Logs into admin through the UI
 */
export async function doLogin(page, baseURL) {
  await page.goto(baseURL + "/user");
  await page.fill('#edit-name', process.env.USERNAME);
  await page.fill('#edit-pass', process.env.PASSWORD);
  await page.click('#edit-submit');
  await page.goto('/');
}
