import React from "react";
import "./style/ColorAddForm.css";

interface ColorAddFormProps {
  red: number;
  green: number;
  blue: number;
  refreshList: () => any;
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
  }


  async handleButtonClick() {
    const url = "http://localhost/";
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify({
        red: this.props.red,
        green: this.props.green,
        blue: this.props.blue,
        name: this.state.name,
      }),
    }).then(data  => console.log(data));
    this.props.refreshList();
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
