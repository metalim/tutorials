
function Square(props){
  let classes = 'square'
  if (props.win) {
    classes += ' win'
  }
  return (
    <button className={classes} onClick={props.onClick} >
      {props.value}
    </button>
  )
}

export default Square
