import { action, observable } from 'mobx'
import { makeObservable } from 'mobx'
import { SummerButtonStatus, WinterButtonStatus, SpringButtonStatus } from "utils/FieldSchoolStatusButtons"
import { RootStore } from './RootStore'

export default class SummerButtonStatusStore {
    
    private rootStore: RootStore

    @observable
    summerButtonStatus: SummerButtonStatus

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        this.summerButtonStatus = SummerButtonStatus.DISABLED
        makeObservable(this)
    }

    @action
    public triggerActive = () => {
        this.summerButtonStatus = SummerButtonStatus.ACTIVE;
        this.rootStore.winterButtonStatusStore.winterButtonStatus = WinterButtonStatus.DISABLED;
        this.rootStore.springButtonStatusStore.springButtonStatus = SpringButtonStatus.DISABLED;
    }

    @action
    public triggerDisabled = () => {
        this.summerButtonStatus = SummerButtonStatus.DISABLED;
    }

}