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

const Part = ({content}) => {
  return (
    <p>{content.name} {content.count}</p>
  )
}

const Statistics = ({data}) => {
  
  return (
    <>
      <Part content = {data.content[0]}></Part>
      <Part content = {data.content[1]}></Part>
      <Part content = {data.content[2]}></Part>
      <Part content = {data.content[3]}></Part>
      <Part content = {data.content[4]}></Part>
      <Part content = {data.content[5]}></Part>
    </>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setScore(score + 1)
    setAverage((score + 1) / (all + 1))
    setPositive((good + 1) / (all + 1))
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage((score) / (all + 1))
    setPositive((good) / (all + 1))
  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setScore(score - 1)
    setAverage((score - 1) / (all + 1))
    setPositive((good) / (all + 1))
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
        count: good
      },
      {
        name: "neutral",
        count: neutral
      },
      {
        name: "bad",
        count: bad
      },
      {
        name: "all",
        count: all
      },
      {
        name: "average",
        count: average
      },
      {
        name: "positive",
        count: positive
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
      <Statistics data= {data}></Statistics>
    </div>

  )

}

export default App
