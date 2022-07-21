import React from "react";
import ColorBox from "../components/ColorBox";
import ColorSlider from "../components/ColorSlider";

export default class ColorPicker extends React.Component<
  {},
  { red: number; green: number; blue: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
    };

    this.handleBlueChange = this.handleBlueChange.bind(this);
    this.handleRedChange = this.handleRedChange.bind(this);
    this.handleGreenChange = this.handleGreenChange.bind(this);
  }

  handleRedChange(value: number) {
    this.setState({ red: value });
  }

  handleGreenChange(value: number) {
    this.setState({ green: value });
  }

  handleBlueChange(value: number) {
    this.setState({ blue: value });
  }

  render() {
    return (
      <div>
        <ColorSlider
          text="R"
          value={this.state.red}
          onValueChange={this.handleRedChange}
        />
        <ColorSlider
          text="G"
          value={this.state.green}
          onValueChange={this.handleGreenChange}
        />
        <ColorSlider
          text="B"
          value={this.state.blue}
          onValueChange={this.handleBlueChange}
        />
        <p>{this.state.red}</p>
        <ColorBox
          red={this.state.red}
          green={this.state.green}
          blue={this.state.blue}
        />
      </div>
    );
  }
}
