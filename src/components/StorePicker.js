import React from 'react';
import { getFunName } from '../helpers'; // Get the getFunName function from helpers.js 


class StorePicker extends React.Component {

  /* One way of binding `this` is to use a contstructor function:

    constructor(){ 
      super(); // Gotta run this
      this.goToStore = this.goToStore.bind(this); // Looks for the this.goToStore method and binds `this` to the method so `this` is available in other methods
    }
  */

  goToStore(event){
    event.preventDefault();
    console.log('You changed the URL');

    // a) Grab the text from the box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);

    // b) Transition from `/` to `/store/:storeId` 
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  
  render(){
    return (
      <form className="store-selector" onSubmit={ (event) => this.goToStore(event) }>
        { /* I am a comment: */ }
        <h2>Please enter a store:</h2>
        <input type="text" placeholder="Store Name" defaultValue={ getFunName() } ref={ (input) => { this.storeInput = input } } required/>
        <button type="submit">Visit store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;