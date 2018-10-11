import React from 'react'

const Side = (props) => {
  //debugger
  return (
    <div>
      { props.sides.join(", ") }
    </div>
  )
}

export default Side
