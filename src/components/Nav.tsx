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
  onClickMissions?: any;
  onClickLaunchPads?: any;
};
type State = {
  pageDataSource: string;
};

export default function Navigation(props: Props) {
  return (
    <>
      <div className="mx-auto nav-menu">
        <Button variant="outline-danger" size="sm" className="nav-menu-btn" onClick={props.onClickRockets}>
          Rockets
        </Button>
        <Button variant="outline-danger" size="sm" className="nav-menu-btn" onClick={props.onClickCapsules}>
          Capsules
        </Button>
        <Button variant="outline-danger" size="sm" className="nav-menu-btn" onClick={props.onClickMissions}>
          Missions
        </Button>
        <Button variant="outline-danger" size="sm" className="nav-menu-btn" onClick={props.onClickLaunchPads}>
          Launch Pads
        </Button>
      </div>
    </>
  );
}
