import { useState } from 'react'
import Calendar from './components/Calendar'
import Clock from './components/Clock'
import Calculator from './components/Calculator'
import Weather from './components/Weather'
import StopTimer from './components/StopTimer'
import DrawingBoard from './components/DrawingBoard'
import './App.css'

function App() {
  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        <div className="widget"><Clock /></div>
        <div className="widget"><Calendar /></div>
        <div className="widget"><Calculator /></div>
        <div className="widget"><Weather /></div>
        <div className="widget"><StopTimer /></div>
        <div className="widget"><DrawingBoard /></div>
      </div>
    </div>
  )
}

export default App
