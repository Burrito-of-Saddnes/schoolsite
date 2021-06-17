import { action, observable } from 'mobx'
import { makeObservable } from 'mobx'
import { SideBarStatus } from "../utils/SideBarStatus"

export default class SideBarStore {

    @observable
    sideBarStatus: SideBarStatus

    constructor() {
        this.sideBarStatus = SideBarStatus.DISABLED
        makeObservable(this)
    }
    
    @action
    public triggerActive = () => {
        this.sideBarStatus = SideBarStatus.ACTIVE;
    }

    @action
    public triggerDisabled = () => {
        this.sideBarStatus = SideBarStatus.DISABLED;
    } 

}