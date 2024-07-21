import { expect, test } from '../src/fixtures/base';
import { goto } from '../src/navigation';
import { users } from '../src/users';

test.describe('API Tests', () => {    
  test.beforeEach(async ({ steps, loginPage, driversPage }) => {
    await steps.login(loginPage, driversPage);
  })


  test('Checking user email and name in "me" request', async ({ api }) => {
    const { name, email } = await api.get('me')
    expect(name).toBe('Test User'); 
    expect(email).toBe(users.testUser.email);
  })

  test('Checking rows of drivers in a driver table', async ({ page, api, driversPage }) => {
    await goto(driversPage); 
    await page.waitForSelector(driversPage.driverRowClass);
    const driversRows = await  driversPage.driverRow.count();
    const { items } = await api.get('drivers')
    expect(items.length).toBe(driversRows);
  })

  test('Checking rows of trucks in a truck table', async ({ page, trucksPage, api }) => {
    await goto(trucksPage);
    await page.waitForSelector(trucksPage.TruckRowClass);
    const trucksInTable = await page.locator(trucksPage.TruckRowClass).count();
    const { items } = await api.get('trucks');
    expect(items.length).toBe(trucksInTable);
  })
})