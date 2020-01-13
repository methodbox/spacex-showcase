import React from 'react';
import { format } from 'date-fns';
// Components
import Capsules from './Capsules';
import CapsuleMissions from './CapsuleMissions';
import '../../styles/capsules.css';
// Custom Types
type Capsule = {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  missions: any;
  landings: number;
  type: string;
  reuse_count: number;
};
// State & Props Types
type Props = {};
type State = {
  capsuleObj: Array<Capsule>;
};

export default class SpacexData extends React.Component<Props, State> {
  state: State = {
    capsuleObj: [],
  };

  componentDidMount() {
    fetch('https://api.spacexdata.com/v3/capsules')
      .then(res => res.json())
      .then(json => {
        json.forEach((capsule: any): void => {
          this.setState({
            capsuleObj: [...this.state.capsuleObj, capsule],
          });
        });
      });
  }

  _formatDate(dateString: string): string {
    return format(new Date(dateString), 'MMMM Do yyyy, h:mm a');
  }

  render() {
    return (
      <div>
        {this.state.capsuleObj.map((capsule, index) => {
          const missionList = capsule.missions.map((missionItem: any, missionKey: number) => {
            return <CapsuleMissions key={missionKey} missionName={missionItem.name} flightCount={missionItem.flight} />;
          });

          return (
            <Capsules
              key={index}
              capsuleSerial={capsule.capsule_serial}
              capsuleId={capsule.capsule_id}
              status={capsule.status}
              originalLaunchDate={this._formatDate(capsule.original_launch)}
              missions={missionList}
              landings={capsule.landings}
              capsuleType={capsule.type}
              reuseCount={capsule.reuse_count}
            />
          );
        })}
      </div>
    );
  }
}
