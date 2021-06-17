import { StateMachine } from 'stateless';
import React, { Component} from 'react'
import { RoutingStatus } from 'utils/RoutingStatus';
import { RoutingTrigger } from 'utils/RoutingTrigger';

interface RoutingStatusStateMachineContainerProps {
  initialStatus: RoutingStatus
  children: (options: RoutingStatusStateMachineContainerOptions) => any
  onFieldSchool?: () => any
  onOnline?: () => any
  onFulltimeClass?: () => any
  onTournament?: () => any
  onAbout?: () => any
}

interface RoutingStatusStateMachineContainerState {
  status: RoutingStatus
}

interface RoutingStatusStateMachineContainerOptions {
  status: RoutingStatus
  onFieldSchoolClick: () => any
  onOnlineClick: () => any
  onFulltimeClassClick: () => any
  onTournamentClick: () => any
  onAboutClick: () => any
}

export default class RoutingStatusStateMachineContainer extends Component<RoutingStatusStateMachineContainerProps, RoutingStatusStateMachineContainerState>{

  private machine: StateMachine<RoutingStatus, RoutingTrigger>;

  constructor (props: RoutingStatusStateMachineContainerProps) {

    super(props)

    this.state = {
      status: props.initialStatus
  }
      
    this.machine = new StateMachine<RoutingStatus, RoutingTrigger>(props.initialStatus);

    this.machine.onTransitioned(({ destination }) => this.setState({ status: destination }))

    this.machine.configure(RoutingStatus.HOME)
      .permit(RoutingTrigger.onFieldSchool, RoutingStatus.FIELDSCHOOL)
      .permit(RoutingTrigger.onOnline, RoutingStatus.ONLINE)
      .permit(RoutingTrigger.onFulltimeClass, RoutingStatus.FULLTIMECLASS)
      .permit(RoutingTrigger.onTournament, RoutingStatus.TOURNAMENT)
      .permit(RoutingTrigger.onAbout, RoutingStatus.ABOUT);

    this.machine.configure(RoutingStatus.FIELDSCHOOL)
      .permit(RoutingTrigger.onHome, RoutingStatus.HOME)
      .permit(RoutingTrigger.onOnline, RoutingStatus.ONLINE)
      .permit(RoutingTrigger.onFulltimeClass, RoutingStatus.FULLTIMECLASS)
      .permit(RoutingTrigger.onTournament, RoutingStatus.TOURNAMENT)
      .permit(RoutingTrigger.onAbout, RoutingStatus.ABOUT);
      
    this.machine.configure(RoutingStatus.ONLINE)
      .permit(RoutingTrigger.onFieldSchool, RoutingStatus.FIELDSCHOOL)
      .permit(RoutingTrigger.onHome, RoutingStatus.HOME)
      .permit(RoutingTrigger.onFulltimeClass, RoutingStatus.FULLTIMECLASS)
      .permit(RoutingTrigger.onTournament, RoutingStatus.TOURNAMENT)
      .permit(RoutingTrigger.onAbout, RoutingStatus.ABOUT);

    this.machine.configure(RoutingStatus.FULLTIMECLASS)
      .permit(RoutingTrigger.onFieldSchool, RoutingStatus.FIELDSCHOOL)
      .permit(RoutingTrigger.onOnline, RoutingStatus.ONLINE)
      .permit(RoutingTrigger.onHome, RoutingStatus.HOME)
      .permit(RoutingTrigger.onTournament, RoutingStatus.TOURNAMENT)
      .permit(RoutingTrigger.onAbout, RoutingStatus.ABOUT);

    this.machine.configure(RoutingStatus.TOURNAMENT)
      .permit(RoutingTrigger.onFieldSchool, RoutingStatus.FIELDSCHOOL)
      .permit(RoutingTrigger.onOnline, RoutingStatus.ONLINE)
      .permit(RoutingTrigger.onFulltimeClass, RoutingStatus.FULLTIMECLASS)
      .permit(RoutingTrigger.onHome, RoutingStatus.HOME)
      .permit(RoutingTrigger.onAbout, RoutingStatus.ABOUT);

    this.machine.configure(RoutingStatus.ABOUT)
      .permit(RoutingTrigger.onFieldSchool, RoutingStatus.FIELDSCHOOL)
      .permit(RoutingTrigger.onOnline, RoutingStatus.ONLINE)
      .permit(RoutingTrigger.onFulltimeClass, RoutingStatus.FULLTIMECLASS)
      .permit(RoutingTrigger.onTournament, RoutingStatus.TOURNAMENT)
      .permit(RoutingTrigger.onHome, RoutingStatus.HOME);

  }

  public onFieldSchoolClick = () => {
    this.machine.fire(RoutingTrigger.onFieldSchool);
  }

  public onOnlineClick = () => {
    this.machine.fire(RoutingTrigger.onOnline);
  }

  public onFulltimeClassClick = () => {
    this.machine.fire(RoutingTrigger.onFulltimeClass);
  }

  public onTournamentClick = () => {
    this.machine.fire(RoutingTrigger.onTournament);
  }

  public onAboutClick = () => {
    this.machine.fire(RoutingTrigger.onAbout);
  }
  
  render() {
    const child = this.props.children({
        status: this.state.status,
        onFieldSchoolClick: this.onFieldSchoolClick,
        onOnlineClick: this.onOnlineClick,
        onFulltimeClassClick: this.onFulltimeClassClick,
        onTournamentClick: this.onTournamentClick,
        onAboutClick: this.onAboutClick
    })
    
    return <div className="_routingStatusStateMachineContainer" onClick={e => e.stopPropagation()}>{child}</div>
  }

}
