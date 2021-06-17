import { action, observable } from 'mobx'
import { makeObservable } from 'mobx'
import { SummerButtonStatus, WinterButtonStatus, SpringButtonStatus } from "utils/FieldSchoolStatusButtons"
import { RootStore } from './RootStore'

export default class SpringButtonStatusStore {

    private rootStore: RootStore

    @observable
    springButtonStatus: SpringButtonStatus

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        this.springButtonStatus = SpringButtonStatus.DISABLED
        makeObservable(this)
    }
    
    @action
    public triggerActive = () => {
        this.springButtonStatus = SpringButtonStatus.ACTIVE;
        this.rootStore.summerButtonStatusStore.summerButtonStatus = SummerButtonStatus.DISABLED;
        this.rootStore.winterButtonStatusStore.winterButtonStatus = WinterButtonStatus.DISABLED;
    }

    @action
    public triggerDisabled = () => {
        this.springButtonStatus = SpringButtonStatus.DISABLED;
    }

}