import { Navigation } from "../navigation";
import { BaseViewPage } from "./base-view.page";


export class TrucksPage extends BaseViewPage implements Navigation {
    url() {
        return '/fleets/trucks';
    }

    async waitForLoadState() {
        
    }
}
