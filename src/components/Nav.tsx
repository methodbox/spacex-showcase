import React, { useState } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
//  Components
import Home from './Home';
import CapsuleData from './capsules/CapsuleData';
import RocketData from './rockets/RocketData';

import '../styles/nav.css';

type Props = {
  onClickRockets?: any;
  onClickCapsules?: any;
  onClickShips?: any;
  onClickDragons?: any;
  onClickCores?: any;
  onClickLaunchPads?: any;
  onClickMissions?: any;
  onClickLaunches?: any;
  onClickPayloads?: any;
};
type State = {
  pageDataSource: string;
};

export default function Navigation(props: Props) {
  return (
    <>
      <div className="nav-menu mx-auto">
        <Button variant="link" size="sm" className="nav-menu-btn" onClick={props.onClickRockets}>
          Rockets
        </Button>
        <Button variant="link" size="sm" className="nav-menu-btn" onClick={props.onClickCapsules}>
          Capsules
        </Button>
        <Button variant="link" size="sm" className="nav-menu-btn" onClick={props.onClickShips}>
          Ships
        </Button>
        <Button variant="link" size="sm" className="nav-menu-btn" onClick={props.onClickDragons}>
          Dragons
        </Button>
        <Button variant="link" size="sm" className="nav-menu-btn" onClick={props.onClickCores}>
          Cores
        </Button>
        <Button variant="link" size="sm" className="nav-menu-btn" onClick={props.onClickLaunchPads}>
          Launch Pads
        </Button>
        <Button variant="link" size="sm" className="nav-menu-btn" onClick={props.onClickMissions}>
          Missions
        </Button>
        <Button variant="link" size="sm" className="nav-menu-btn" onClick={props.onClickLaunches}>
          Launches
        </Button>
        <Button variant="link" size="sm" className="nav-menu-btn" onClick={props.onClickPayloads}>
          Payloads
        </Button>
      </div>
    </>
  );
}
