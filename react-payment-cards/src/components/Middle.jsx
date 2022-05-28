import React from 'react'

const Middle = (props) => {
  return (
    <div style={{display: "flex", flexDirection:"column"}}>
      <div className='caseStudy'>Case Study</div>
      <div className='heading'>{props.data.heading}</div>
      <div className='subHeading'>{props.data.subHeading}</div>
    </div>
  )
}

export default Middle