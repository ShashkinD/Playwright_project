import { Base } from "../pages/base";

export class Header extends Base {
    readonly userName = this.getByText('Test User');

}