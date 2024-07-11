import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shafton-blog.com/fr/');
  await expect(page.getByTitle('Shafton vs Reality', { exact: true })).toContainText('Shafton vs Reality');
});