import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as Actions from '../../store/actions.js'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                  {this.props.storedResults.map(item => (
                    <li key={item.id} onClick={() => this.props.onDeleteResult(item.id, item.value)}>{item.value}</li>
                  ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncCounter: () => dispatch({ type: Actions.INCREMENT }),
    onDecCounter: () => dispatch({ type: Actions.DECREMENT }),
    onAddCounter: () => dispatch({ type: Actions.ADD, value: 5, }),
    onSubCounter: () => dispatch({ type: Actions.SUBTRACT, value: 5, }),
    onStoreResult: (result) => dispatch({ type: Actions.STORE_RESULT, result: result }),
    onDeleteResult: (id, result) => dispatch({ type: Actions.DELETE_RESULT, resultID: id, result: result }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
