import { expect } from "@playwright/test";
import { goto } from "../navigation";
import { LoginPage } from "../pages/login.page";
import { DriversPage } from "../pages/drivers.page";
import { step } from "../helpers/steps";
import { users } from "../users";


export class LoginSteps {
    @step ('Login User')
    async login(loginPage: LoginPage, driversPage: DriversPage) {
            await goto(loginPage);
            await loginPage.login(users.testUser);
            await expect(driversPage.header.userName).toBeVisible();
    }
}