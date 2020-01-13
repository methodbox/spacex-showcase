import React from 'react';
//  Components
import Navigation from './Nav';
import PageData from './PageData';

const backgroundImg = require('../assets/2014_-_9crs4_streak.jpg');
type Props = {};
type State = {
  pageDataSource: string;
};

export default class Home extends React.Component<Props, State> {
  state: State = {
    pageDataSource: '',
  };

  componentDidMount() {
    document.body.style.backgroundImage = `url(${backgroundImg})`;
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
  }

  _handleChangePage(pageName: string) {
    this.setState({ pageDataSource: pageName });
  }

  render() {
    return (
      <>
        <Navigation
          onClickRockets={() => this._handleChangePage('Rockets')}
          onClickCapsules={() => this._handleChangePage('Capsules')}
          onClickShips={() => this._handleChangePage('Ships')}
          onClickDragons={() => this._handleChangePage('Dragons')}
          onClickCores={() => this._handleChangePage('Cores')}
          onClickLaunchPads={() => this._handleChangePage('LaunchPads')}
          onClickMissions={() => this._handleChangePage('Missions')}
          onClickLaunches={() => this._handleChangePage('Launches')}
          onClickPayloads={() => this._handleChangePage('Payloads')}
        />
        <PageData pageDataSource={this.state.pageDataSource} />
      </>
    );
  }
}
