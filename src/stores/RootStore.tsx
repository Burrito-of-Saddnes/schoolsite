import SideBarStore from "./SideBarStore"
import WinterButtonStatusStore from "./WinterButtonStatusStore"
import SummerButtonStatusStore from "./SummerButtonStatusStore"
import SpringButtonStatusStore from "./SpringButtonStatusStore";
import MiniMenuStatusStore from "./MiniMenuStatusStore";

export class RootStore {

    sideBarStore: SideBarStore;
    winterButtonStatusStore: WinterButtonStatusStore;
    summerButtonStatusStore: SummerButtonStatusStore;
    springButtonStatusStore: SpringButtonStatusStore;
    miniMenuStatusStore: MiniMenuStatusStore;


    constructor() {
        this.sideBarStore = new SideBarStore();
        this.miniMenuStatusStore = new MiniMenuStatusStore();
        this.winterButtonStatusStore = new WinterButtonStatusStore(this);
        this.summerButtonStatusStore = new SummerButtonStatusStore(this);
        this.springButtonStatusStore = new SpringButtonStatusStore(this)
    }

}
