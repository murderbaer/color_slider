import React from "react";
import "./style/ColorAddForm.css";

interface ColorAddFormProps {
  red: number;
  green: number;
  blue: number;
}

interface ColorAddFormState {
  name: string;
}

export default class ColorAddForm extends React.Component<
  ColorAddFormProps,
  ColorAddFormState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }


  handleButtonClick() {
    let url = "http://localhost/";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
      }
    };

    var data = `{
     "red": ${this.props.red},
     "green": ${this.props.green},
     "blue": ${this.props.blue},
     "name": "${this.state.name}"
   }`;

    xhr.send(data);
  }

  handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="ColorAddForm">
        <p>Name</p>
        <input
          type="text"
          className="TextInputName"
          onChange={this.handleTextChange}
        />
        <button className="ButtonAdd" onClick={this.handleButtonClick}>
          Add
        </button>
      </div>
    );
  }
}
