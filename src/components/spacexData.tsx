import * as React from 'react';
import * as momemnt from 'moment';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.css';

// Components
import Capsules from './capsules';
import moment = require('moment');

// Custom Types
type Capsule = {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  mission: string;
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

  test() {
    fetch('https://api.spacexdata.com/v3/capsules')
      .then(res => res.json())
      .then(json => {
        json.forEach((capsule: any): void => {
          this.setState({
            capsuleObj: [...this.state.capsuleObj, capsule],
          });
        });
      });

    console.log(this.state.capsuleObj[0].capsule_id);
  }
  _formatDate(dateString: string): string {
    return moment(dateString).format('MMMM Do YYYY, h:mm:ss a');
  }
  render() {
    return (
      <div>
        <h1>Main component</h1>
        {this.state.capsuleObj.map(capsule => {
          return (
            <Capsules
              capsuleSerial={capsule.capsule_serial}
              capsuleId={capsule.capsule_id}
              status={capsule.status}
              originalLaunchDate={this._formatDate(capsule.original_launch)}
              mission={capsule.mission}
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
