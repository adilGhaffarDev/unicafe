import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>
const Header = ({header}) => {
  return (
    <>
      <h1>{header}</h1>
    </>
  )
}
const Statistics = ({good,neutral,bad}) => {
  const all = good+neutral+bad
  if(all === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
  <table>
    <tbody>
    <Statistic text="good" value ={good} />
    <Statistic text="neutral" value ={neutral} />
    <Statistic text="bad" value ={bad} />
    <Statistic text="all" value ={all} />
    <Statistic text="average" value ={((good/all)*1)+((bad/all)*-1)} />
    <Statistic text="positive" value = {(good/all)*100 + "%"} />
    </tbody>
    </table>)
}

const Statistic = ({text,value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const headerFeedback = 'give feedback'
  const headerStatitics = 'statistics'

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header header={headerFeedback}/>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header header={headerStatitics}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
