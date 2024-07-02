import { useState } from 'react'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
    
    
  )
}

const Total = (props) => {
  return (
    <h1>{props.exercises1 + props.exercises2 + props.exercises3}</h1>
  )
}

function App() {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14



  return (
    <>
      
      <Header course = {course}></Header>
      <Content part1={part1} exercises1 = {exercises1}
        part2={part2} exercises2 = {exercises2} 
        part3={part3} exercises3 = {exercises3}
        ></Content>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}></Total>
    </>
  )
}

export default App
