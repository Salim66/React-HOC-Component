import React, { Component } from 'react';

const CounterManager = (GetComponent) => {

  class HOCCounter extends Component {

    constructor(){
        super();

        this.state = {
            counter : 0
        }
    }

    render(){

        let { counter } = this.state;

        let handleIncrement = () => {
            this.setState((prevState) => ({
                counter : prevState.counter + 1
            }))
        }
        
        let handleDecrement = () => {
            this.setState((prevState) => ({
                counter : prevState.counter - 1
            }))
        }

        

        return <GetComponent counter={ counter } increment={ handleIncrement } decrement={ handleDecrement } />

    }

  }

  return HOCCounter;
}

export default CounterManager;