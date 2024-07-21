export * from '@playwright/test';

import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DriversPage } from '../pages/drivers.page';
import { TrucksPage } from '../pages/trucks.page';
import { API } from '../helpers/api';
import { Steps } from '../steps';

type MyFixtures = {
    loginPage: LoginPage;
    driversPage: DriversPage;
    trucksPage: TrucksPage;
    api: API;
    steps: Steps;
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({page}, use) => await use(new LoginPage(page)),
    driversPage: async ({page}, use) => await use(new DriversPage(page)),
    trucksPage: async ({page}, use) => await use(new TrucksPage(page)),
    api: async ({page}, use) => await use(new API(page.request)),
    steps: async({}, use) => await use(new Steps())
})