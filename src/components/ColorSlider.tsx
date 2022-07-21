import React, { ChangeEvent } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./ColorSlider.css";

export default class ColorSlider extends React.Component<
  { text: string; value: number },
  { text: string; value: number | number[] }
> {
  constructor(props: { text: string; value: number }) {
    super(props);
    this.state = {
      text: props.text,
      value: props.value,
    };
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleSliderChange(value: number | number[]) {
    this.setState({ value });
    console.log(value);
  }

  handleTextChange(value: ChangeEvent<HTMLInputElement>) {
    if (this.validateTextInput(value.target.value)) {
      this.setState({ value: Number(value.target.value) });
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
      <div>
        <p className="Text">{this.state.text}</p>
        <Slider
          className="Slider"
          onChange={this.handleSliderChange}
          min={0}
          max={255}
          value={this.state.value}
        />
        <input
          type="text"
          value={this.state.value as number}
          onChange={this.handleTextChange}
        />
      </div>
    );
  }
}
