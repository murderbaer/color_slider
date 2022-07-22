import './style/ColorBox.css';

interface ColorBoxInterface {
  red: number;
  green: number;
  blue: number;
}

function componentToHex(c: number) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function ColorBox (props: ColorBoxInterface)  {
  return (
    <div className="ColorBox" style={{ backgroundColor: rgbToHex(props.red, props.green, props.blue) }} />
  );
};

export default ColorBox;
