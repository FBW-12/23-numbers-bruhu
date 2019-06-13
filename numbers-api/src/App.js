import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import React bindings for Redux
import { connect } from "react-redux";
import { API_CALL_REQUEST } from "./actions/actionTypes";

class App extends Component {
  render() {
    // Destructuring assignment from Props
    const { fetching, data, onRequestNumber, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo rounded-circle" alt="logo" />
          <h1 className="App-title">Numbers API</h1>
{data && <blockquote>{data}</blockquote>}
          
          <input type="text" defaultValue="Insert number here" />
          <button type="submit" onClick={onRequestNumber}>Show info about this number</button>
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

// Dispatching actions with mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    onRequestNumber: () => dispatch({ type: API_CALL_REQUEST })
  };
};

// the connect() function connects the React component to the Redux store.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
