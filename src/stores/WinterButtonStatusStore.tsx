import { action, observable } from 'mobx'
import { makeObservable } from 'mobx'
import { SummerButtonStatus, WinterButtonStatus, SpringButtonStatus } from "utils/FieldSchoolStatusButtons"
import { RootStore } from './RootStore'

export default class WinterButtonStatusStore {

    private rootStore: RootStore

    @observable
    winterButtonStatus: WinterButtonStatus

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        this.winterButtonStatus = WinterButtonStatus.DISABLED
        makeObservable(this)
    }
    
    @action
    public triggerActive = () => {
        this.winterButtonStatus = WinterButtonStatus.ACTIVE;
        this.rootStore.summerButtonStatusStore.summerButtonStatus = SummerButtonStatus.DISABLED;
        this.rootStore.springButtonStatusStore.springButtonStatus = SpringButtonStatus.DISABLED;
    }

    @action
    public triggerDisabled = () => {
        this.winterButtonStatus = WinterButtonStatus.DISABLED;
    }

}