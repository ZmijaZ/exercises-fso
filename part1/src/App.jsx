import { useState } from 'react'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part = {props.part1}></Part>
      <Part part = {props.part2}></Part>
      <Part part = {props.part3}></Part>
    </>    
  )
}

const Part = ({part}) => {
  return(
    <p>{part.name} {part.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <h1>{props.exercises1 + props.exercises2 + props.exercises3}</h1>
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
      }
    ]
  }




  return (
    <>
      
      <Header course = {course.name}></Header>
      <Content 
        part1={course.parts[0]} 
        part2={course.parts[1]} 
        part3={course.parts[2]} 
        ></Content>
      <Total
        exercises1 = {course.parts[0].exercises} 
        exercises2 = {course.parts[1].exercises} 
        exercises3 = {course.parts[2].exercises}>
      </Total>
    </>
  )
}

export default App
