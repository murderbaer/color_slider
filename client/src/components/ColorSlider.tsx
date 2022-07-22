import React, { Component, ChangeEvent } from "react";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";

import "./style/ColorSlider.css";

interface ColorSliderInterface {
  text: string;
  value: number | number[];
  onValueChange: (value: number) => void;
}

export default class ColorSlider extends Component<
  ColorSliderInterface,
  ColorSliderInterface
> {
  constructor(props: ColorSliderInterface) {
    super(props);
    this.state = {
      text: props.text,
      value: props.value,
      onValueChange: props.onValueChange,
    };

    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleSliderChange(value: number | number[]) {
    this.setState({ value });
    this.state.onValueChange(value as number);
  }

  handleTextChange(value: ChangeEvent<HTMLInputElement>) {
    if (this.validateTextInput(value.target.value)) {
      this.setState({ value: Number(value.target.value) });
      this.state.onValueChange(Number(value.target.value));
    }
  }

  validateTextInput(input: string) {
    const numberToCheck = Number(input);
    if (isNaN(Number(input)) || numberToCheck < 0 || numberToCheck > 255) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="Container">
        <p className="Text">{this.state.text}</p>
        <Slider
          className="Slider"
          onChange={this.handleSliderChange}
          min={0}
          max={255}
          value={this.state.value}
        />
        <input
          className="TextInput"
          type="text"
          value={this.state.value as number}
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
}
