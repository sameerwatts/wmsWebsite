import React, { Component } from 'react';
import './App.css';
import Nav from '../Component/Nav';
import '../Assets/typography.css';
import HeroSlider from '../Component/Slider';
import WhyD2D from '../Component/WhyD2D';
import Technologies from '../Component/Technologies';

class App extends Component {
  state = {
    isMenuClicked: false,
  }
  menuHandler = () => {
    this.setState(prevState => ({ isMenuClicked: !prevState.isMenuClicked }))
  }
  render() {
    return (
      <div className="App">
        <Nav handleMenu={this.menuHandler} isMenuClicked={this.state.isMenuClicked} />
        <HeroSlider />
        <WhyD2D/>
        <Technologies />
      </div>
    );
  }
}

export default App;