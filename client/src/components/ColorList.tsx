import React, { useEffect } from "react";
import ColorListItem from "./ColorListItem";

interface ColorListProps {
  colors: any[];
  loaded: boolean;
}

export default class ColorList extends React.Component<{}, ColorListProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      colors: [],
      loaded: false,
    };
  }

  componentDidMount(): void {
    fetch("http://localhost/")
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
        this.setState({ colors: temp, loaded: true });
      });
  }

  render() {
    return (
      <div className="ColorList">
        {!this.state.loaded && <div>Loading...</div>}
        {this.state.loaded && this.state.colors}
      </div>
    );
  }
}
