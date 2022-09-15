import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  }
}

export default App;
