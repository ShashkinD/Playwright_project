import { Base } from "./base";
import { Sidebar } from "../components/sidebar";
import { Header } from "../components/header";
import { TableFooter } from "../components/table-footer";


export abstract class BaseViewPage extends Base {
    readonly sidebar = new Sidebar(this.page);
    readonly header = new Header(this.page);
    readonly tableFooter = new TableFooter(this.page);
}