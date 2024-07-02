import { useState } from 'react'

const Header = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.anecdote}</p>
      <p>{props.votes}</p>
    </>
  )
}

const Button = (props) => {
  return(
    <button onClick = {props.onClick}>{props.text}</button>
  )
}

function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0}

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)
  const [max, setMax] = useState({
    value: 0,
    position: 0})
  
  const handleButtonClick = () => {
    const random = Math.floor(Math.random()*anecdotes.length)
    setSelected(random)
  }

  const handleVote = () => {
    const newVotes = votes[selected] + 1
    setVotes({...votes, [selected]: newVotes})
    
    const newMaxValue = newVotes > max.value ? newVotes : max.value
    const newMaxPosition = newVotes === newMaxValue ? selected : max.position
    setMax({value: newMaxValue, position: newMaxPosition})
  }

  return (
    <>
      <Header text = {"Anecdote of the day"}></Header>
      <Content anecdote = {anecdotes[selected]} votes = {`has ${votes[selected]} votes`}></Content>
      
      <Button 
        onClick = {handleVote} text = {"vote"}/>
      <Button 
        onClick = {handleButtonClick} text = {"next anecdote"}/>
      
      <Header text = {"Anecdote with most votes"}></Header>

      <Content anecdote = {anecdotes[max.position]} votes = {`has ${votes[max.position]} votes`}></Content>
      </>
      
  )
}

export default App
