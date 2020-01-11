import React from 'react';
import ReactDOM from 'react-dom';
// Components
import Home from './components/Home';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
type Props = {};
type State = {};

class App extends React.Component<Props, State> {
  render() {
    return (
      <>
        <Home />
      </>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
