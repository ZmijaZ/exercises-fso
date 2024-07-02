import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}


function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )

}

export default App
