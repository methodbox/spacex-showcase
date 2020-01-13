import React from 'react';
import RocketData from './rockets/RocketData';
import CapsuleData from './capsules/CapsuleData';
import ShipData from './ships/ShipData';
import DragonData from './dragons/DragonData';
import CoreData from './cores/CoreData';
import LaunchPadData from './launchpads/LaunchPadData';
import MissionData from './missions/MissionData';
import LauncheData from './launches/LaunchData';
import PayloadData from './payloads/PayloadData';

type Props = {
  pageDataSource: string;
};
/**
 * This returns a stateless function component.
 * This component conditionally renders the selected page
 * component via props.
 * @param props
 */
export default function PageData(props: Props) {
  return (
    <>
      {props.pageDataSource === 'Rockets' ? <RocketData /> : null}
      {props.pageDataSource === 'Capsules' ? <CapsuleData /> : null}
      {props.pageDataSource === 'Ships' ? <ShipData /> : null}
      {props.pageDataSource === 'Dragons' ? <DragonData /> : null}
      {props.pageDataSource === 'Cores' ? <CoreData /> : null}
      {props.pageDataSource === 'LaunchPads' ? <LaunchPadData /> : null}
      {props.pageDataSource === 'Missions' ? <MissionData /> : null}
      {props.pageDataSource === 'Launches' ? <LauncheData /> : null}
      {props.pageDataSource === 'Payloads' ? <PayloadData /> : null}
    </>
  );
}
