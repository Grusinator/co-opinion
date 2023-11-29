import { test, expect } from '@playwright/test';

test('should log in a user', async ({ page }) => {
  // Go to the login page
  await page.goto('/login');

  // Fill out the login form and submit it
  await page.fill('#username', 'test');
  await page.fill('#password', 'password');
  await page.click('#login');

  // Check that the user was logged in successfully
  const successMessage = await page.textContent('#success');
  expect(successMessage).toBe('Login successful');
});

test('should not log in a user with wrong credentials', async ({ page }) => {
  // Go to the login page
  await page.goto('/login');

  // Fill out the login form with incorrect credentials and submit it
  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpass');
  await page.click('#login');

  // Check that the login attempt was unsuccessful
  const errorMessage = await page.textContent('#error');
  expect(errorMessage).toBe('Invalid username or password');
});


