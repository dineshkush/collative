import React from 'react'
import "./CounterItem.scss"
import CountUp from "react-countup";

const CounterItem = ({ number, title, countSign }) => {
  return (
    <div className='counter_item text-center'>
      <CountUp duration={10} className="counter" end={number}/> <span className="counter_sign">{countSign}</span>
      <h5>{title}</h5>
    </div>
  )
}

export default CounterItem
