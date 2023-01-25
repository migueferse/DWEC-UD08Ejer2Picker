
function PickerValue(props) {
  const {name, value} = props;
  return(
    <div>
      <label>{name}:</label>
      <span>{value}</span>
    </div>
  )
}

export default PickerValue