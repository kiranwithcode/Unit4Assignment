import React from 'react'
import Bottom from './Bottom';
import Middle from './Middle';
import Top from './Top';
import data from '../data/data.json';

export const Cards = () => {
    console.log(data.color);
    let colors = data.color;
    let bgColor = {backgroundColor: colors}
  return (
    <div>
        <div className="container" style={bgColor}>
            <Top data={data} />
            <Middle data={data}/>
            <Bottom data={data} />
        </div>
    </div>
  )
}
