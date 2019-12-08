import * as React from 'react';

// Styles
import '../styles/capsules.css';

type Props = {
  capsuleSerial: string;
  capsuleId: string;
  status: string;
  originalLaunchDate: string;
  missions: string;
  landings: number;
  capsuleType: string;
  reuseCount: number;
};

export default class Capsules extends React.Component<Props> {
  render() {
    return (
      <div className="container capsule-li-padding">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Capsule: {this.props.capsuleSerial}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Serial Number:
              {this.props.capsuleSerial}
            </li>
            <li className="list-group-item">Id: {this.props.capsuleId}</li>
            <li className="list-group-item">Status: {this.props.status}</li>
            <li className="list-group-item">Original Launch Date: {this.props.originalLaunchDate}</li>
            <li className="list-group-item">No. of Landings: {this.props.landings}</li>
            <li className="list-group-item">Capsule Type: {this.props.capsuleType}</li>
            <li className="list-group-item">Reuse Count: {this.props.reuseCount}</li>
          </ul>
          <div className="card-body">
            Missions:
            <ul className="list-group-flush">{this.props.missions}</ul>
          </div>
          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    );
  }
}
