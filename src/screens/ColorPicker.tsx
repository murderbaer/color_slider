import React, { Component } from 'react'
import ColorSlider from '../components/ColorSlider'

export default class ColorPicker extends Component {
  render() {
    return (
        <ColorSlider text='R' value={0} />
    )
  }
}
