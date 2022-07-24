import React from "react";
import ColorBox from "../components/ColorBox";
import ColorSlider from "../components/ColorSlider";
import ColorAddForm from "../components/ColorAddForm";

import "./ColorPicker.css";
import ColorListItem from "../components/ColorListItem";

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
      <div className="MainContainer">
        <div className="ColorPickerContainer">
          <div className="SlidersContainer">
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
          </div>
          <div className="ColorBoxContainer">
            <ColorBox
              red={this.state.red}
              green={this.state.green}
              blue={this.state.blue}
              size={"200px"}
            />
          </div>
        </div>
        <div className="ColorAddContainer">
          <ColorAddForm
            red={this.state.red}
            blue={this.state.blue}
            green={this.state.green}
          />
        </div>
        <ColorListItem r={200} g={30} b={40} name="test" />
        <ColorListItem r={20} g={100} b={40} name="test" />
      </div>
    );
  }
}
