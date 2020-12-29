import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

///////////////////////////////////////////
// const Zsb_hello = (props) => {
//   console.log()
//   const a = new Date()
//   const b = a.toString()
//   const c = 10900000
//   const d = 1
//   const e = 2
//   return (<p>hi,  <font color='red'>{props.name}</font>  ,  you are so good , your age is <font color='red'> {props.age} </font>. {b}  fdsdsa {c} da     <br/>       {d+e}</p>    )
// }
//
// const Zsb_hello1 = () => {
//   const f=100
//   const g=200 +f
//   return (
//       <>
//       <h1>1111111111</h1>
//       <h2> 22222 {g}  2222222</h2>
//   3333333333333
//   </>
// )
// }
//
// const footer = () => {
//   return (
//       <div>
//         <a href="https://www.baidu.com"> baidu </a>
//       </div>
//   )
// }
//
// const App1 = () => {
//   return (
//       <div>
//       <Zsb_hello />
//       <Zsb_hello1 />
//       <h1> end </h1>
//       <footer />
//       </div>
//
// )
// }
////////////////////////////////////
const App1 = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
      <div>
        <h1> {course} </h1>
        <p> {part1} {exercises1} </p>
        <p> {part2} {exercises2} </p>
        <p> {part3} {exercises3} </p>
        <p> Number of exercises {exercises1 + exercises2 + exercises3} </p>
      </div>
)
}

const App2 = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
      <div>
      <h1> {course} </h1>
        <p> {part1} {exercises1} </p>
        <p> {part2} {exercises2} </p>
        <p> {part3} {exercises3} </p>
        <p> Number of exercises {exercises1 + exercises2 + exercises3} </p>
      </div>
)
}

const Header = (props) => {
  return (
      <h1> {props.course} </h1>
)
}
const Content = (props) => {
  return (
      <h1> {props.part}  ,  {props.exercises}</h1>
)
}
const Total = (props) => {
  return (
      <h1>Number of exercises is:  {props.num} </h1>
)
}
const App3 = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
      <div>
        <Header course={course}/>
        <Content part={part1} exercises={exercises1} />
        <Total num={exercises1+exercises2+exercises3} />
      </div>
  )
}

const Part = (props) => {
  return (
      <p>part is :  {props.part} </p>
)
}

const App4 = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
      <div>
        <Part part={part1}/>
        <Part part={part2}/>
        <Part part={part3}/>
      </div>
)
}

ReactDOM.render(<App4 />, document.getElementById("root"))
