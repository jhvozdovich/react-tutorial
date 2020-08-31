import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errorMessage: "",
    };
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
      return <div> Latitude: {this.state.latitude} </div>;
    } else {
      return <div>Loading!</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
