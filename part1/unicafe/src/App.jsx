import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>{props.text}</button>
  )
}

const StatisticsLine = ({content}) => {
  return (
    <tr>
      <td>{content.name} {content.count}</td>
    </tr>
  )
}

const Statistics = ({data}) => {
  if (data.content[3].count === 0)
    return <p>No feedback given</p>
  else
    return (
      <table>
        <tbody>
          <StatisticsLine content = {data.content[0]}/>
          <StatisticsLine content = {data.content[1]}/>
          <StatisticsLine content = {data.content[2]}/>
          <StatisticsLine content = {data.content[3]}/>
          <StatisticsLine content = {data.content[4]}/>
          <StatisticsLine content = {data.content[5]}/>
        </tbody>
      </table>
    )
}

function App() {

  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
  // const [all, setAll] = useState(0)
  // const [score, setScore] = useState(0)
  // const [average, setAverage] = useState(0)
  // const [positive, setPositive] = useState(0)
  const [statistics, setStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    score: 0,
    average: 0,
    positive: 0,

  })

  const handleGood = () => {
    setStatistics(
      {...statistics,
        good: statistics.good + 1,
        all: statistics.all + 1,
        score: statistics.score + 1,
        average: (statistics.score + 1) / (statistics.all + 1),
        positive: (statistics.good + 1) / (statistics.all + 1)
      }
    )
    // setGood(good + 1)
    // setAll(all + 1)
    // setScore(score + 1)
    // setAverage((score + 1) / (all + 1))
    // setPositive((good + 1) / (all + 1))
  }
  const handleNeutral = () => {
    setStatistics(
      {...statistics,
        neutral: statistics.neutral + 1,
        all: statistics.all + 1,
        average: (statistics.score) / (statistics.all + 1),
        positive: (statistics.good) / (statistics.all + 1)
      }
    )
    // setNeutral(neutral + 1)
    // setAll(all + 1)
    // setAverage((score) / (all + 1))
    // setPositive((good) / (all + 1))
  }
  const handleBad = () => {
    setStatistics(
      {...statistics,
        bad: statistics.bad + 1,
        all: statistics.all + 1,
        score: statistics.score - 1,
        average: (statistics.score - 1) / (statistics.all + 1),
        positive: (statistics.good) / (statistics.all + 1)
      }
    )
    // setBad(bad + 1)
    // setAll(all + 1)
    // setScore(score - 1)
    // setAverage((score - 1) / (all + 1))
    // setPositive((good) / (all + 1))
  }

  const data = {
    headers: [
      "give feedback",
      "statistics" 
    ],
    buttons: [
      handleGood, handleNeutral, handleBad
    ],
    content: [
      {
        name: "good",
        count: statistics.good
      },
      {
        name: "neutral",
        count: statistics.neutral
      },
      {
        name: "bad",
        count: statistics.bad
      },
      {
        name: "all",
        count: statistics.all
      },
      {
        name: "average",
        count: statistics.average.toFixed(2)
      },
      {
        name: "positive",
        count: statistics.positive.toFixed(4)*100 + "%"
      }

    ]
  }

  return (
    <div>
      <Header text = {data.headers[0]}/>
      <Button 
        onClick = {data.buttons[0]} 
        text = {data.content[0].name}/>
      <Button 
        onClick = {data.buttons[1]} 
        text = {data.content[1].name}/>
      <Button 
        onClick = {data.buttons[2]} 
        text = {data.content[2].name}/>
      <Header text = {data.headers[1]}/>
      <Statistics data = {data}></Statistics>
    </div>

  )

}

export default App
