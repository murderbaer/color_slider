import './style/ColorBox.css';

function componentToHex(c: number) {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default (props: any) => {
  let r = Number(props.red);
  let g = Number(props.green);
  let b = Number(props.blue);
  let rgb = 1;
  return (
    <div className="ColorBox" style={{ backgroundColor: rgbToHex(r, g, b) }}>
      <p>{r}</p>
      <p>{g}</p>
      <p>{b}</p>
      <p>{rgb.toString(16)}</p>
    </div>
  );
};
