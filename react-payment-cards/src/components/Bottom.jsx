import React from 'react'

const Bottom = (props) => {
  return (
    <div className='bottom'>
      <div> {props.data.devices.join(" - ")} </div>
      <div> <i class="fa-solid fa-arrow-right-long"></i> </div>
    </div>
  )
}

export default Bottom