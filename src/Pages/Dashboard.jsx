import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Chart1 from '../Components/Chart1'
import Chart2 from '../Components/Chart2'
const Dashboard = () => {
  return (
    <div className='First-line'>
      <Card/>
      <div className='charts'>
      <Chart2/>
      <Chart1/>
      </div>
    </div>
  )
}

export default Dashboard