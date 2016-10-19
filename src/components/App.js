import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

  constructor(){
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder  = this.addToOrder.bind(this);
    this.state = {
      fishes: {},
      order: {}
    };

  }

  addFish(fish){
    // Update our state:
    const fishes    = { ...this.state.fishes }

    // Add in our new fish:
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;

    // Now set the state:
    this.setState({ fishes: fishes })

  }

  loadSamples(){
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder(key){
    // Take a copy of our state:
    const order = { ...this.state.order };

    // Update or add the new number of fish ordered:
    order[key] = order[key] + 1 || 1;

    // Update our state:
    this.setState({ order: order })
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul>
            { /* Looping over the fish: */ }
            { Object
              .keys(this.state.fishes) // .keys() returns an array
              .map(key => <Fish key={ key } index={ key } details={ this.state.fishes[key] } addToOrder={ this.addToOrder } />)
            } 
          </ul>
        </div>
        <Order fishes={ this.state.fishes } order={ this.state.order } />
        <Inventory addFish={ this.addFish } loadSamples={ this.loadSamples } />
      </div>
    )
  }
}

export default App;













