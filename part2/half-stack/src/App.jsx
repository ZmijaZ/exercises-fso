import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Content = ({parts}) => {
  return(
    <div>
      {parts.map(part => {
        return(
          <Part part = {part}></Part>
        )
      })}
    </div>
  )
}

const Part = ({part}) => {
  return(
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = ({parts}) => {
  const values = parts.map(part => part.exercises)
  return (
    <strong>total of {values.reduce((acc, curr) => acc + curr, 0)} exercises</strong>
  )
}

const Course = ({course}) => { 
  return(
    <div>
      <Header text = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )

}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return (
    <>
      <Course course = {course}/>
    </>
  )

}

export default App
