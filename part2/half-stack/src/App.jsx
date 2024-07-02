import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const Content = ({parts}) => {
  return(
    <div>
      {parts.map(part => {
        return(
          <Part key = {part.id}part = {part}></Part>
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

const AllCourses = ({courses}) => {
  return (
    <div>
      {courses.map(course => <Course key = {course.id} course = {course}/>)}
    </div>
  )
}

function App() {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web development curriculum</h1>
      {/* <Course course = {courses[0]}/> */}
      <AllCourses courses = {courses}/>
    </>
  )

}

export default App
