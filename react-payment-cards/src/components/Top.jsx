import React from 'react'

const Top = (props) => {

  return (
    <div className='top'>
        <div className='data'> {props.data.date} </div>
        <div className='logo'>
            <img src={props.data.logo} alt="" className='image' />
        </div>
    </div>
  )
}

export default Top