import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (error) =>
        this.setState({ errorMessage: `Can't find location. ${error.message}` })
    );
  }

  render() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage} </div>;
    } else if (this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    } else {
      return <div>Loading!</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
