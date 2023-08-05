import { test, expect } from '@playwright/test';

test('should register a user', async ({ page }) => {
  // Go to the registration page
  await page.goto('/register');

  // Fill out the registration form and submit it
  await page.fill('#username', 'test');
  await page.fill('#password', 'password');
  await page.click('#register');

  // Check that the form was submitted successfully
  const successMessage = await page.textContent('#success');
  expect(successMessage).toBe('Registration successful');
});

