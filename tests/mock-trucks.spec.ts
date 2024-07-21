import { test, expect } from '../src/fixtures/base';
import { goto } from '../src/navigation';


test.describe('Mock Test', () => {    
    test.beforeEach(async ({ steps, loginPage, driversPage }) => {
      await steps.login(loginPage, driversPage);
    })
    
    test('Chenging Dims & payload to emojis', async ({ trucksPage, page }) => {
      const emojiArray = ['😀', '🫠', '😱', '🤤', '🤥', '🥵', '😎', '🤢', '👺', '👽️'];
      

      await page.route('**/api/v1/trucks?*', async route => {
        const response = await route.fetch();
        const json = await response.json();
        function contentChanger (element: { toString: () => string; }) {
          return element.toString().split('').map((item) => {return item = emojiArray[Math.floor(Math.random() * emojiArray.length)]}).join('');  
        } 
  
        json.items = json.items.map((item: { trailer: { payload: string; length: string; min_width: string; min_height: string; }; }) => {
          if (item.trailer) {
            item.trailer.payload = contentChanger(item.trailer.payload);
            item.trailer.length = contentChanger(item.trailer.length);
            item.trailer.min_width = contentChanger(item.trailer.min_width);
            item.trailer.min_height = contentChanger(item.trailer.min_height);
          }
          return item;
        });
  
        await route.fulfill({ 
          response, 
          json 
        });
      });
  
      await goto(trucksPage);
      await expect(page.locator(trucksPage.TruckRowClass).first(),).toBeVisible()
      console.log()
    });
  
  })