import React, { Component } from "react";
import { Provider } from "react-redux";
import CounterContainer from "./components/CounterContainer";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
  }
}

export default App;
