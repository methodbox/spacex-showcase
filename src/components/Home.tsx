import React from 'react';
//  Components
import Navigation from './Nav';
import RocketData from './rockets/RocketData';
import CapsuleData from './capsules/CapsuleData';

type Props = {};
type State = {
  pageDataSource: string;
};

export default class Home extends React.Component<Props, State> {
  state: State = {
    pageDataSource: '',
  };

  _handleChangePage(pageName: string) {
    this.setState({ pageDataSource: pageName });
  }

  render() {
    return (
      <>
        <Navigation
          onClickRockets={() => this._handleChangePage('rockets')}
          onClickCapsules={() => this._handleChangePage('capsules')}
          onClickMissions={() => this._handleChangePage('missions')}
          onClickLaunchPads={() => this._handleChangePage('launchPads')}
        />
        {this.state.pageDataSource === 'rockets' ? <RocketData /> : null}
        {this.state.pageDataSource === 'capsules' ? <CapsuleData /> : null}
      </>
    );
  }
}
