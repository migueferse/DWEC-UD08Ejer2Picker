import PickerValue from './PickerValue';
function PickerValue3(props) {
  const {valueHue, valueSat, valueStep} = props
  return(
    <>
      <PickerValue name={'Hue'} value={valueHue}/>
      <PickerValue name={'Saturation'} value={valueSat}/>
      <PickerValue name={'Steps'} value={valueStep}/>
    </>
  )
}

export default PickerValue3