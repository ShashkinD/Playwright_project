import { Navigation } from "../navigation";
import { BaseViewPage } from "./base-view.page";


export class DriversPage extends BaseViewPage implements Navigation {
    url() {
        return '/users/drivers';
    }

    async waitForLoadState() {
        
    }
}
