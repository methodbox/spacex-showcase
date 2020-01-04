import React from 'react';
import ReactDOM from 'react-dom';
// Components
import SpacexData from './components/spacexData';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/capsules.css';

type Props = {};
type State = {};

class App extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <SpacexData />
      </div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
