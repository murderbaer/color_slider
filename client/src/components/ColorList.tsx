import React from "react";

interface ColorListState {
  colors: any[];
}

interface ColorListProps {
  colors: any[];
}


export default class ColorList extends React.Component<ColorListProps, ColorListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      colors: this.props.colors,
    };
  }

  render() {
    return (
      <div className="ColorList">
        {this.props.colors}
      </div>
    );
  }
}
