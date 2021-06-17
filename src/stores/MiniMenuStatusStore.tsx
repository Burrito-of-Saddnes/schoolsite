import { action, observable } from 'mobx'
import { makeObservable } from 'mobx'
import { MiniMenuStatus } from "utils/MiniMenuStatus"

export default class MiniMenuStatusStore {


    @observable
    miniMenuStatus: MiniMenuStatus

    constructor() {
        this.miniMenuStatus = MiniMenuStatus.DISABLED
        makeObservable(this)
    }
    
    @action
    public triggerActive = () => {
        this.miniMenuStatus = MiniMenuStatus.ACTIVE;
    }

    @action
    public triggerDisabled = () => {
        this.miniMenuStatus = MiniMenuStatus.DISABLED;
    }

}