import { expect, test } from '@playwright/test';

const baseUrl = 'http://localhost:3000/';

test('navigation test', async ({ page }) => {
  await page.goto(baseUrl);
  const titleLocator = page.locator('h1');
  await expect(titleLocator).toHaveText('Algebraic!');

  await page.locator('text=Fruits').click();
  await page.waitForNavigation({ url: `${baseUrl}fruits` });

  await expect(titleLocator).toHaveText('Fruits');
  const fruitsList = await page.$$('[data-test-id^="fruits-page-fruit-"]');
  expect(fruitsList.length).toBe(4);
  const fruitLocator = page.locator('[data-test-id^="fruits-page-fruit-"]');
  await expect(fruitLocator).toHaveText(['papaya', 'apple', 'lemon', 'banana']);
  await expect(
    page.locator('[data-test-id^="fruits-page-fruit-4"]'),
  ).toHaveText('banana');
  await page.waitForNavigation({ url: `${baseUrl}fruits/4` });
  await page.locator('text= add to diet').click();
  await page.locator('text= eat one').click();
  await page.locator('button', { hasText: 'eat one' }).click();
  await page.locator('button', { hasText: 'remove from diet' }).click();
});
