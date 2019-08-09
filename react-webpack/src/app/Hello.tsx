import * as React from "react";
import {hot} from "react-hot-loader";
import {createStore}from 'redux';
import {Provider,connect} from 'react-redux';
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
const App = () => {
    return (
      <div>
        <p>Hello world!</p>
      </div>
    )
  }
export {App};
//export default hot(module)(Hello);