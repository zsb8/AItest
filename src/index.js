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
const Zsb_hello = (props) => {
    console.log()
    const a = new Date()
    const b = a.toString()
    const c = 10900000
    const d = 1
    const e = 2
    return (<p>hi,  <font color='red'>{props.name}</font>  ,  you are so good , your age is <font color='red'> {props.age} </font>. {b}  fdsdsa {c} da     <br/>       {d+e}</p>    )
}

const App1 = () => {
    const f=100
    const g=200 +f
    return (
        <>
        <h1>1111111111</h1>
        <h2> 22222 {g}  2222222</h2>
        3333333333333
    </>
)
}


ReactDOM.render(<App1 />, document.getElementById("root"))

// reportWebVitals();
