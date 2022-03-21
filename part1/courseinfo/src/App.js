const Header = (props) => {
  return (
    <div>
      <h1> {props.header} </h1>
    </div>
  )
}

// const Content = (props) => {
//   return (
//     <div>

//     </div>
//   )
// }

const Total = (props) => {
  return (
    <p>Number of exercises {props.number}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header header={course} />
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <Total number={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
