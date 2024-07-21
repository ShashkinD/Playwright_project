
import { BaseViewPage } from "./base-view.page";


export class DriversPage extends BaseViewPage  {
    pageUrl = '/users/drivers'
    readonly driverRowClass = '[class="v-data-table__tr"]'
    readonly driverRow = this.locator('[class="v-data-table__tr"]')
}
