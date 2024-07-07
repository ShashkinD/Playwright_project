import { Base } from "./base";
import { User } from "../users";
import { Navigation } from "../navigation";

export class LoginPage extends Base implements Navigation {
    readonly emailField = this.getByType('email');
    readonly passwordField = this.getByType('password');
    readonly loginButton = this.getByType('button');
    readonly errorMessage = this.locator('.v-messages__message')

    async login(user: User) {
        await this.emailField.fill(`${user.email}`);
        await this.passwordField.fill(`${user.password}`);
        await this.loginButton.click();
    }

    url() {
        return '/login';
    }

    async waitForLoadState() {
        
    }
}