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
  

export default AllCourses