import { useState } from 'react'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part = {props.part1} exercise = {props.exercise1}></Part>
      <Part part = {props.part2} exercise = {props.exercise2}></Part>
      <Part part = {props.part3} exercise = {props.exercise3}></Part>
    </>    
  )
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercise}</p>
  )
}

const Total = (props) => {
  return (
    <h1>{props.exercises1 + props.exercises2 + props.exercises3}</h1>
  )
}

function App() {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }



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
