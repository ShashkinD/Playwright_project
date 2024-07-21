import { BaseViewPage } from "./base-view.page";


export class TrucksPage extends BaseViewPage {
    pageUrl = '/fleets/trucks';
    readonly TruckRowClass = '[class="v-data-table__tr"]'
}
