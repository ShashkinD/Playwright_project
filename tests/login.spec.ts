import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { users } from '../src/users';
import { goto } from '../src/navigation';

test('Log in with correct credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step('Opening login page', async () => {
    await goto(loginPage); 

  })
  await test.step('Log in as a test user', async () =>{
    await loginPage.login(users.testUser);
  })
  await test.step('Checking account name after login', async () =>{
    await expect(page.getByText('Test User')).toBeVisible();
  })
});

test('Checking that the login form displayed', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step('Opening login page', async () => {
    await goto(loginPage);
  })
  await test.step('Checking form elements to be displayed', async () =>{
    await expect(loginPage.emailField).toBeVisible()
    await expect(loginPage.passwordField).toBeVisible()
    await expect(loginPage.loginButton).toBeVisible()
  })
});

test('Log in with incorsrect password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await test.step('Opening login page', async () => {
    await goto(loginPage);
  })
  await test.step('Entering email and incorrect password', async () =>{
    await loginPage.emailField.fill(users.testUser.email);
    await loginPage.passwordField.fill('12335679');
  });
  await test.step('Logining and checking error message', async () => {
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText('Wrong Email or password');
  })
});

