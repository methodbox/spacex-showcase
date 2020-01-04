import React from 'react';

type Props = {
  missionName: string;
  flightCount: number;
  missionKey: number;
};

export default function CapsuleMissions(props: Props) {
  return (
    <li className="list-group-item border-bottom-0" key={props.missionKey}>
      {props.missionName}
      <span className="badge badge-secondary flight-count-badge">Flight Number: {props.flightCount}</span>
    </li>
  );
}
