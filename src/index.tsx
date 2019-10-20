import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Components
import SpacexData from './components/spacexData';

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
