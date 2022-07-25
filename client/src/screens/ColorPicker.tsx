import React from "react";
import ColorBox from "../components/ColorBox";
import ColorSlider from "../components/ColorSlider";
import ColorAddForm from "../components/ColorAddForm";

import "./ColorPicker.css";
import ColorList from "../components/ColorList";
import ColorListItem from "../components/ColorListItem";

export default class ColorPicker extends React.Component<
  {},
  { red: number; green: number; blue: number; list: any[] }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
      list: [],
    };

    this.handleBlueChange = this.handleBlueChange.bind(this);
    this.handleRedChange = this.handleRedChange.bind(this);
    this.handleGreenChange = this.handleGreenChange.bind(this);
    this.refreshList = this.refreshList.bind(this);
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

  componentDidMount() {
    this.refreshList();
  }

  async refreshList() {
    const list = await fetch("http://localhost/")
      .then((response) => response.json())
      .then((data) => {
        let temp : any= [];
        data.forEach((color: any) => {
          temp.push(
            <ColorListItem
              key={color.id}
              r={color.red}
              g={color.green}
              b={color.blue}
              name={color.name}
            />
          );
        });
        return temp;
      });
      this.setState({list: list});
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
            refreshList={this.refreshList}
          />
        </div>
        <div className="ColorListContainer">
          <ColorList colors={this.state.list}/>
        </div>
      </div>
    );
  }
}
