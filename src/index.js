import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (error) =>
        this.setState({ errorMessage: `Can't find location. ${error.message}` })
    );
  }

  renderContent() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage} </div>;
    } else if (this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  }

  render() {
    return <div className="border">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
