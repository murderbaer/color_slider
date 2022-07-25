import ColorBox from './ColorBox'
import './style/ColorListItem.css'

interface ColorListItemProps {
    r: number
    g: number
    b: number
    name: string
}

export default function ColorListItem(props: ColorListItemProps) {
  return (
    <div className="ColorListItem">
        <p className='ColorListItemText'>R {props.r} G {props.g} B {props.b}</p>
        <ColorBox red={props.r} green={props.g} blue={props.b} size='20px'/>
        <div className="ColorName">{props.name}</div>
    </div>
  )
}
