import React, { Component, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

// import React bindings for Redux
import { connect } from "react-redux";



const App = (props) => {
  render() {
    // Destructuring assignment from Props
    const { fetching, data, onRequestNumber, error } = props;
    
    //useRef hook
    const numRef = useRef(null);
    //Dan Says -> https://twitter.com/dan_abramov/status/1011238901254639616

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Numbers API</h1>
          {data && <blockquote>{data}</blockquote>}
          <input type="text" defaultValue="666" ref={numRef} type="number" />
          <button type="submit" onClick={onRequestNumber(numRef.current.value)}>
            Show info about this number
          </button>
        </header>
      </div>
    );
  }
}

// Extracting Data with mapStateToProps
const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    data: state.data,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestNumber: num => {
      console.log(num);
      return dispatch({ type: "API_CALL_REQUEST", number: num });
    }
  };
};

// the connect() function connects the React component to the Redux store.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
