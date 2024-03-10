import React from 'react'
import "./Counter.scss"
import CounterItem from './counter-item/CounterItem'

const Counter = () => {
  return (
    <section className='counter_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-4">
                <CounterItem number={1000} title="Workstations" countSign="+" />
            </div>
            <div className="col-md-4">
                <CounterItem number={250} title="Parking Spaces" countSign="+" />
            </div>
            <div className="col-md-4">
                <CounterItem number={300} title="Pax Event Space" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Counter
