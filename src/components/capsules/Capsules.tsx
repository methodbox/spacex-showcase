import React from 'react';

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

export default function Capsules(props: Props) {
  return (
    <div className="container capsule-li-padding">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Capsule: {props.capsuleSerial}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Serial Number:
            {props.capsuleSerial}
          </li>
          <li className="list-group-item">Id: {props.capsuleId}</li>
          <li className="list-group-item">Status: {props.status}</li>
          <li className="list-group-item">Original Launch Date: {props.originalLaunchDate}</li>
          <li className="list-group-item">No. of Landings: {props.landings}</li>
          <li className="list-group-item">Capsule Type: {props.capsuleType}</li>
          <li className="list-group-item">Reuse Count: {props.reuseCount}</li>
        </ul>
        <div className="card-body">
          Missions:
          <ul className="list-group-flush">{props.missions}</ul>
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
