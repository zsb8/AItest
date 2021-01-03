import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';
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

//////////////////variables/////////////////////////
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
/////////////////////props///////////////
// const App1 = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return (
//       <div>
//         <h1> {course} </h1>
//         <p> {part1} {exercises1} </p>
//         <p> {part2} {exercises2} </p>
//         <p> {part3} {exercises3} </p>
//         <p> Number of exercises {exercises1 + exercises2 + exercises3} </p>
//       </div>
// )
// }
//
// const App2 = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return (
//       <div>
//       <h1> {course} </h1>
//         <p> {part1} {exercises1} </p>
//         <p> {part2} {exercises2} </p>
//         <p> {part3} {exercises3} </p>
//         <p> Number of exercises {exercises1 + exercises2 + exercises3} </p>
//       </div>
// )
// }
//
// const Header = (props) => {
//   return (
//       <h1> {props.course} </h1>
// )
// }
// const Content = (props) => {
//   return (
//       <h1> {props.part}  ,  {props.exercises}</h1>
// )
// }
// const Total = (props) => {
//   return (
//       <h1>Number of exercises is:  {props.num} </h1>
// )
// }
// const App3 = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return (
//       <div>
//         <Header course={course}/>
//         <Content part={part1} exercises={exercises1} />
//         <Total num={exercises1+exercises2+exercises3} />
//       </div>
//   )
// }
//
// const Part = (props) => {
//   return (
//       <p>part is :  {props.part} </p>
// )
// }
//
// const App4 = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return (
//       <div>
//         <Part part={part1}/>
//         <Part part={part2}/>
//         <Part part={part3}/>
//       </div>
// )
// }

///////////objects//////////
// const t=[1,2,3,4]
// t.forEach(i=>{console.log(i)})
//
// console.log('-----------')
// const t2 = [1,-1,3]
// t2.push(5)
// t2.forEach(i=>{console.log(i)})
//
// console.log('-----------')
// const a = [1,2,3]
// const b = a.concat(5)
// b.forEach(i=>{console.log(i)})
// console.log(b)
//
// console.log('-----------')
// const c = b.map(i=>i*2)
// console.log(c)
// const d = b.map(i => '<li>循环的是：' +i+ ' 数字<li>' )
// console.log(d)
//
// console.log('-----------')
// const e = [1,2,3,4,5]
// const [myFirst,mySecond, ...myRest] = e
// console.log(myFirst, mySecond)
// console.log(myRest)
//
// console.log('-----------')
// const object1 = {
//   name:'tony',
//   age: 18,
//   grades: [100,200,300],
//   remark:{a:1, b:2}
// }
// console.log(object1.name,object1.remark)
// object1['country']='china'
// console.log(object1.country)
//
// const App5 = () => {
//   return (
//       <div>
//       {t}
//       </div>
//   )
// }
///////////////function///////////////////////
//
// const addonenum = a =>a+100
//
// const t =[1,2,3]
// const a = t.map(i=>i*2)
// console.log(a)
//
// console.log('-----------')
// function add(a,b){
//   a = a+1
//   b = b+1
//   const c = a+b
//   return (c)
// }
// console.log(add(1,2))
//
// console.log('-----------')
// const add1 = (a,b) => {return(a+b)}
// console.log(add1(1,2))
//
// console.log('-----------')
// const MyProps = (props) => {
//   const a = 1
//   const b = 'good man'
//   console.log(props.age)
//   return (
//       //这里有一个坑，必须用一个东西比如任何符号，包围起来，直接写内容不行
//       <p>数字是{props.age+a} , 文字是{props.des+b}  </p>
// )
// }
// const MyPropsTest = () => {
//   return (
//       //这里有一个坑，这里age=1不行，1还非得用文字型，很怪
//       <div> <MyProps age="1" des="zsb is a" /> </div>
// )
// }
//
// const App6 = () =>{
//   return (add(1,2))
// }
///////////////exercises1.3- 1.5/////////////////////
// const App7 = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }
//   return (
//       <div>
//         Number {part1.exercises}  name is : {part1.name} <br/>
//         Number {part2.exercises}  name is : {part2.name} <br/>
//         Number {part3.exercises}  name is : {part3.name} <br/>
//       </div>
//   )
// }
//
// const App8 = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {name: 'Fundamentals of React', exercises: 10},
//     {name: 'Using props to pass data',exercises: 7},
//     {name: 'State of a component',exercises: 14}
//   ]
//   const name = parts.map(i=>i.name)
//   const exercises = parts.map(i=>i.exercises)
//   return (
//       <div>
//         Number {exercises[0]}  name is : {name[0]} <br/>
//         Number {exercises[1]}  name is : {name[1]} <br/>
//         Number {exercises[2]}  name is : {name[2]} <br/>
//       </div>
//   )
// }
//
//
// const Header = (props) => {
//   return (
//       <p>{props.course}</p>
//   )
// }
// const Content = (props) => {
//   return (
//       <p>{props.parts[0]["name"]}</p>
// )
// }
// const Total = (props) => {
//   return (
//       <p>{props.parts[0]["exercises"]+props.parts[1]["exercises"]+props.parts[2]["exercises"]}</p>
//   )
// }
// const App9 = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {name: 'Fundamentals of React', exercises: 10},
//     {name: 'Using props to pass data',exercises: 7},
//     {name: 'State of a component',exercises: 14}
//   ]
//   return (
//       <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//   </div>
// )
// }
//
// const App10 = () => {
//   const parts = {
//     name: 'Fundamentals of React',
//     parts: [{name: 'Fundamentals of React', exercises: 10},{name: 'Using props to pass data',exercises: 7},{name: 'State of a component',exercises: 14}]
//   }
//   return (
//       <div>
//       {parts.name}<br/>
//       {parts.parts[0]["name"]}<br/>
//       {parts.parts[0]["exercises"]}
//       </div>
// )
// }
//
// const arto = {
//   name: 'zsb',
//   greet: function(){console.log("hello,my name is :"+this.name)}
// }
// setTimeout(arto.geet, 100)
//
// for (let i=1;i<5;i++){
//   console.log(i)
// }
//
// console.log('-----------')
// var a = new Array();
// a[0] = "dog"
// a[1] = "cat"
// for (const i of a){
//   console.log(i)
// }
/////////////c. 组件状态，事件处理////////////////////////////
// const Hello = ({name,age}) => {
//   const bornYear = () =>{return (new Date().getFullYear() -age)}
//   return (
//       <div>
//       <p>Hello {name}, you are {age} years old </p>
//       <p>So you were probably born in {bornYear()}</p>
//       </div>
// )
// }
//
// const App11 = () => {
//   const name = 'Peter'
//   const age = 10
//   return (
//       <div>
//         <h1>Greetings</h1>
//         <Hello name="Maya" age={26 + 10} />
//         <Hello name={name} age={age} />
//       </div>
// )
// }
//////////////////页面重新渲染 /////////////////
// let counter
// counter = 1
//
// const App12 = (props) => {
//     const [counter, setCounter] = useState(0) //函数调用将state 添加到组件，并将其值用0进行初始化
//     setInterval(
//         ()=>{
//             setCounter(counter+1)
//         },1000
//     )
//     return (
//         <div> {counter}</div>
//     )
// }
///////////////event handling 事件处理-鼠标点击///////////////////////////////
// let counter
// counter = 1
//
// const App13 = (props) => {
//     const [counter, setCounter] = useState(0) //函数调用将state 添加到组件，并将其值用0进行初始化
//
//     const handleClick = () =>{
//         setCounter(counter+1)
//     }
//     //上面三行写成这个也可以，其实都一样的设计一个函数：const handleClick = () => setCounter(counter+1)
//
//     const resetClick = () =>{
//         setCounter(0)
//     }
//     return (
//         <div>
//         <div>{counter}</div>
//         <button onClick={handleClick}>点击</button>  {/*按钮的onClick属性的值设置为引用handleClick函数*/}
//         <button onClick={resetClick}>重置计数</button>
//         </div>
//     )
// }
////////////////将状态传给子组件, 解构，简化 ////////////
// let counter = 1
// const Display = ({counter}) =><div>{counter}</div>
// const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>
//
// const App14 = (props) => {
//     const [counter, setCounter] = useState(0) //这个组件初始化别忘记了
//     const increaseByone = () =>{
//         setCounter(counter+1)
//     }
//     const resetClick = () =>{
//         setCounter(0)
//     }
//     const decreaseByone = () =>{
//         setCounter(counter-1)
//     }
//     return (
//         <div>
//             <Display counter={counter}/>
//             <Button text='点击增加' handleClick={increaseByone} /> &nbsp;&nbsp;
//             <Button text='点击减少' handleClick={decreaseByone} /> &nbsp;&nbsp;
//             <Button text='重置' handleClick={resetClick} />
//         </div>
//     )
// }
/////////////////complex state//////////////////
// const History = (props) => {
//     if (props.allClicks.length == 0) {
//         return( <div> 为啥你怎么还不去按啊? </div>)
//     }
//     else {
//         return (
//             < div > 你的{props.allClicks}按键动作被我记下来啦，哈哈 < /div>
//     )
//     }
// }
//
// const Button = (props) => {
//     return (
//         <div>
//             <button onClick={props.onClick}> {props.text} </button>
//         </div>
//     )
// }
// const App15 = () => {
//     const [clicks,setClicks] = useState(   {left:0,right:0}   )
//     //每次单击都会被存储到一个叫 allClicks 的单独的状态单元中，这个状态单元被初始化为一个空数组:
//     const [allClicks,setAll] = useState ([])
//     // const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})
//     const handleLeftClick = () => {
//         //向数组中添加新元素是通过concat方法完成的，该方法不改变现有数组，而是返回数组 新副本，并将元素添加到该数组中
//         setAll(allClicks.concat('L')) //当单击left 按钮,将L 添加到 allClicks 数组中
//         setClicks({...clicks, left: clicks.left + 1})
//     }
//     const handleRightClick = () =>{
//         const newClicks = {
//             ...clicks,
//             right: clicks.right +1
//         }
//         setAll(allClicks.concat('R')) //当单击right 按钮,将R 添加到 allClicks 数组中
//         setClicks(newClicks)
//     }
//     return (
//         <div>
//             {clicks.left} &nbsp;&nbsp;
//             <button onClick={handleLeftClick}> left </button> &nbsp;&nbsp;
//             <button onClick={handleRightClick}> right </button> &nbsp;&nbsp;
//
//             <Button onClick={handleLeftClick} text='Button left'/>
//             <Button onClick={handleRightClick} text='Button right'/>
//             {clicks.right}
//             {/*为 allClicks 数组调用join方法，
//             该数组将所有项目连接到一个字符串中，由作为函数参数传递的字符串分隔，
//             在我们的例子中，该字符串是一个空格。*/}
//             <p>{allClicks.join(' ')}</p>
//             <History allClicks={allClicks}/>
//         </div>
//     )
//
// }
//ReactDOM.render(<App15 />, document.getElementById("root"))
///////////////////返回函数的函数function that returns a function///////////////////
// const App16 = () => {
//     const [counter,setCounter] = useState(10)
//     // setCounter(counter+1) //注意，这个必须屏蔽，因为后面用了handleClick()，改handleClick就可以
//     const test = (a) => {
//         const setToCounter = () => {
//             setCounter(a)
//         }
//         return setToCounter
//     }
//
//     return(
//         <div>
//             {counter}&nbsp;&nbsp;
//             <button onClick={test(1000)}>按钮1000</button>  &nbsp;&nbsp;
//             <button onClick={test(0)}>按钮0</button>  &nbsp;&nbsp;
//             <button onClick={test(counter+1)}>按钮increase</button>  &nbsp;&nbsp;
//         </div>
//     )
// }
// ReactDOM.render(<App16 />, document.getElementById("root"))
/////////////////将事件处理，传递到子组件去/////////////////////
// const Button = (props) => {
//     return (
//         <div>
//             <button onClick={props.handleClick}> {props.text} </button>
//         </div>
//     )
// }
// const App17 = () => {
//     const [counter,setCounter] = useState(0)
//     return(
//         <div>
//             {counter} &nbsp;&nbsp;
//             <Button text='按钮加数' handleClick={  ()=>setCounter(counter+1) }/> &nbsp;&nbsp;
//             <Button text='按钮减数' handleClick={  ()=>setCounter(counter-1) }/> &nbsp;&nbsp;
//             <Button text='按钮重置' handleClick={  ()=>setCounter(0) }/> &nbsp;&nbsp;
//             <Button text='按钮100' handleClick={  ()=>setCounter(100) }/> &nbsp;&nbsp;
//         </div>
//     )
// }
// ReactDOM.render(<App17 />, document.getElementById("root"))
//////////////exercises 1.6 - 1.11  ///////////////
// let object = {
//     good: 0,
//     neutral:0,
//     bad:0,
//     all:0,
//     ave:0,
//     pos:0
// }
// const Button = (props) => {
//     return(
//         <button onClick={props.handleClick}> {props.text} </button>
//     )
// }
// const Statistics = (props) => {
//     if (props.all !=0) {
//         return(
//             <div>
//             <Statistic text='good' value ={props.good} />
//             <Statistic text='neutral' value ={props.neutral} />
//             <Statistic text='bad' value ={props.bad} />
//             <Statistic text='all' value ={props.all} />
//             <Statistic text='ave' value ={props.ave} />
//             <Statistic text='pos' value ={props.pos} />
//             </div>
//         )
//     }
//     else{
//         return(
//             <div>
//             No feedback given
//             </div>
//         )
//     }
// }
// const Statistic = (props) => {
//     return(
//         <div>
//         <table><tbody><tr><td width="240">{props.text}:</td><td width="240">{props.value}</td></tr></tbody></table>
//         </div>
//     )
// }
// const App18 = () => {
//     const [good,setGood] = useState(0)
//     const [neutral,setNeutral] = useState(0)
//     const [bad,setBad] = useState(0)
//     const handleGoodClick = () =>{
//         setGood(good+1)
//         object['good']=good
//     }
//     const handleNeutralClick = () =>{
//         setNeutral(neutral+1)
//         object['neutral']=neutral
//
//     }
//     const handleBadClick = () =>{
//         setBad(bad+1)
//         object['bad']=bad
//
//     }
//     object['all']=object['good']+object['neutral']+object['bad']
//     object['ave']=(object['good']*1+object['neutral']*0+object['bad']*-1)/object['all']
//     object['pos']=object['good']/object['all']
//
//     return(
//         <div>
//         <h1> Give your feedback </h1>
//         <Button text='good' handleClick={handleGoodClick} /> &nbsp;&nbsp;
//         <Button text='neutral' handleClick={handleNeutralClick} /> &nbsp;&nbsp;
//         <Button text='bad' handleClick={handleBadClick} /> &nbsp;&nbsp;
//         <h1> Statistics </h1>
//         <Statistics
//         good={object.good} neutral={object.neutral} bad={object.bad}
//         all={object.all}  ave={object.ave}  pos={object.pos}/>
//         </div>
//     )
// }
// ReactDOM.render(<App18 />, document.getElementById("root"))
////////////////exercises 1.12 - 1.14/////////////////////////////
// const App19 = (props) => {
//     const [selected,setSelected] = useState(0)
//     const [points,setVotes] = useState(new Array(6+1).join('0').split('').map(parseFloat))
//     const handleClick =() =>{
//         setSelected(selected+1)
//     }
//     const handleClick_vote =() =>{
//         console.log(points)
//         const copy = [...points]
//         copy[selected] +=1
//         setVotes(copy)
//         // copy[selected]=copy[selected]+1
//         // setVotes(copy[selected])
//     }
//     if (selected>5){
//         let maxnum = [0,0]
//         for (var i=0;i<5;i++){
//             if (points[i]>maxnum[1]){
//                 maxnum[1] = points[i]
//                 maxnum[0] = i
//             }
//         }
//         console.log(maxnum)
//         return(
//             <div>
//             <p>{props.anecdotes[5]}</p>
//             <p>has {points.[5]} votes.</p>
//             <button onClick={handleClick_vote}>vote</button>
//             <button onClick={handleClick}>next anecdotes</button>
//             <h1>Anecote with most votes</h1>
//             <p>{props.anecdotes.[maxnum[0]]}</p>
//             has {maxnum[1]} votes
//             </div>
//         )
//     }
//     else{
//         return(
//             <div>
//             <p>{props.anecdotes[selected]}</p>
//             <p>has {points.[selected]} votes.</p>
//             <button onClick={handleClick_vote}>vote</button>
//             <button onClick={handleClick}>next anecdotes</button>
//             </div>
//         )
//     }
//
// }
// const anecdotes = [
//     'If it hurts, do it more often',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]
// ReactDOM.render(<App19 anecdotes={anecdotes} />, document.getElementById("root"))
////////////////鼠标点击字体变化 //////////
// const App20 = () =>{
//     const [text,setText] = useState(true) //使用hook看状态，初始真
//     const handleClick = () =>{
//         setText(!(text)) //点击后，改状态text属性，真改为假，假改为真
//     }
//     return(
//         <div>
//             <h2 onClick={handleClick}>  {text ?'你爱我么' : '我爱你'} </h2>
//         </div>
//     )
// }
// ReactDOM.render(<App20  />, document.getElementById("root"))
////////////////点击，字体变化 ，用类/////////////////
// class App21 extends React.Component {
//     //由于setState只能写对象，所以这里不得不{属性写法}
//     //注意，这里state不是随意命名的变量
//     state = {
//         myAttribute:true,
//         name:'linen'
//     }
//     render(){
//         const {myAttribute,name} = this.state
//         return (
//             <div>
//                 <h2 onClick={this.handleClick}> {myAttribute? '你爱我么': '我爱你'} {name}</h2>
//             </div>
//         )
//     }
//     handleClick = () =>{
//         const myAttribute = this.state.myAttribute
//         this.setState({myAttribute:!myAttribute}) //setState是关键命令，且注意只能针对对象
//     }
// }
// ReactDOM.render(<App21  />, document.getElementById("root"))
// // class App21 extends React.Component {
// //     state = {isLove:true}
// //     render(){
// //         const {isLove} = this.state
// //         return (
// //             <div>
// //                 <h2 onClick={this.handleClick}> {isLove? '你爱我么': '我爱你'} </h2>
// //             </div>
// //         )
// //     }
// //     handleClick = () =>{
// //         const isLove = this.state.isLove
// //         this.setState({isLove:!isLove})
// //     }
// // }
// ReactDOM.render(<App21  />, document.getElementById("root"))
////////////////////////ref的回调调用////////////////
/*需求：自定义组件，点击第一个输入框，提示一个值，第二个输入框失去焦点则提示另外一个值*/
//这里是练习ref的.createRef()写法
// class App22 extends React.Component{
//     showInput = () =>{
//         alert(this.myRef1.current.value) //注意，固定写法，KEY固定叫current
//     }
//     // handleBlur= () =>{
//     //     const theinput = this.myRef2.current //注意，固定写法，KEY固定叫current
//     //     alert(theinput.value)
//     // }
//     handleBlur= (event) =>{ //不用上面的，改用evet.target也可以得到input值
//         alert(event.target.value)
//     }
//     myRef1 = React.createRef()//容器存储被ref所标识的节点
//     // myRef2 = React.createRef()
//     render(){
//         return(
//             <div>
//                 <input type="text" ref={this.myRef1}></input>&nbsp;
//                 <button onClick={this.showInput}>提示输入</button>&nbsp;
//                 <input onBlur={this.handleBlur} type="text"
//                        placeholder="失去焦点则提示"></input>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<App22  />, document.getElementById("root"))
////////非受控组件写法//////没有提交的用户名和密码////
// class App23 extends React.Component{
//     myRef1 = React.createRef() //容器存储被ref所标识的节点
//     myRef2 = React.createRef() //容器存储被ref所标识的节点
//     handleSubmit = (event) =>{
//         event.preventDefault() //为了测试没有实际发给服务器，故意这里阻止表单提交
//         const username = this.myRef1.current //固定写法，KEY固定叫current
//         const password = this.myRef2.current //固定写法，KEY固定叫current
//         alert(`你输入的用户名是${username.value} ， 你输入的密码是${password.value} `)
//         //username放的是节点信息，即输入框节点信息，而username.value才是具体数值
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 用户名：<input ref={this.myRef1} type='text' name='username'/>
//                 密码：<input ref={this.myRef2} type='password' name='password'/>
//                 <button>登陆</button>
//             </form>
//         )
//     }
// }
// ReactDOM.render(<App23  />, document.getElementById("root"))

////////高阶函数和函数柯里化//////没有提交的用户名和密码////
// class App24 extends React.Component{
//     //初始化状态
//     state = {//固定写法，state名字不能乱改
//         username:'',
//         password:''
//     }
//     //保存用户名和密码到状态中,采用高阶函数和柯里化
//     saveFormDate = (dataType) => {
//         return(event)=>{
//             this.setState({[dataType]:event.target.value})//注意对象[变量]
//         }
//     }
//     //表单提交的回调,这里没有采用ref
//     handleSubmit = (event) =>{
//         event.preventDefault()//阻止表单提交
//         const {username,password} = this.state//这里用存在状态里的数据，不是节点而是实际数值了
//         alert(`你输入的用户名是${username} ， 你输入的密码是${password} `)
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 用户名：<input onChange={this.saveFormDate('username')}  type='text' name='username'/>
//                 密码：<input  onChange={this.saveFormDate('password')}   type='password' name='password'/>
//                 <button>登陆</button>
//             </form>
//         )
//     }
// }
// ReactDOM.render(<App24  />, document.getElementById("root"))
///////////////////////////////////////////
////////高阶函数和不用柯里化//////没有提交的用户名和密码////
// class App24 extends React.Component{
//     //初始化状态
//     state = {//固定写法，state名字不能乱改
//         username:'',
//         password:''
//     }
//     //保存用户名和密码到状态中,采用高阶函数，但是没有柯里化
//     saveFormDate = (dataType,event) => {
//        this.setState({[dataType]:event.target.value})//注意对象[变量]
//     }
//     //表单提交的回调,这里没有采用ref
//     handleSubmit = (event) =>{
//         event.preventDefault()//阻止表单提交
//         const {username,password} = this.state//这里用存在状态里的数据，不是节点而是实际数值了
//         alert(`你输入的用户名是${username} ， 你输入的密码是${password} `)
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 用户名：<input onChange={ event =>this.saveFormDate('username',event)}  type='text' name='username'/>
//                 密码：<input  onChange={event =>this.saveFormDate('password',event)}   type='password' name='password'/>
//                 <button>登陆</button>
//             </form>
//         )
//     }
// }
// ReactDOM.render(<App24  />, document.getElementById("root"))
//////////////////////生命周期///////////
// class App25 extends React.Component{
//     death = () =>{//卸载组件unmount，让组件从页面上消失
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     state = {
//         opacity :0.5
//     }
//     //组件挂载页面之后
//     componentDidMount() {
//         this.timer = setInterval(()=>{
//                 //获取原来的状态
//                 let {opacity} = this.state
//                 //减少0.1
//                 opacity = opacity-0.1
//                 //设置新的透明度
//                 if (opacity<=0) opacity=1
//                 this.setState({opacity:opacity})
//             },200
//         )
//     }
//     //组件将要卸载
//     componentWillUnmount() {
//         clearInterval(this.timer) //清空定时器
//     }
//     //初始化渲染，状态更新后
//     render(){
//         return(
//             <div>
//                 <h2 style={{opacity:this.state.opacity}}>我爱你</h2>
//                 <button onClick={this.death}>按了就消失文字</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<App25  />, document.getElementById("root"))
///////////////时钟//////////////////////
// const myStyle={
//     color:"red"
// }
// class App26 extends  React.Component {
//     state = {date: new Date()}
//     componentDidMount(){
//         setInterval(()=>{
//                 this.setState({date: new Date()})
//             },1000
//         )
//     }
//     render(){
//         return (
//             <div>
//                 <h1>hello</h1>
//                 <input type='text'/><br/>
//                 <span style={myStyle}>现在是:{this.state.date.toTimeString()}</span>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<App26  />, document.getElementById("root"))
////////////////////diffing对比////////////////
// class App27 extends  React.Component {
//     state ={
//         persons: [
//             {id:1,name:'小李',age:18},
//             {id:2,name:'小张',age:19}
//         ]
//     }
//     add = () =>{
//         const {persons} = this.state
//         const p = {id:persons.length+1,name:'小王',age:20}
//         this.setState({persons: [p,...persons]})
//     }
//     render(){
//         return(
//             <div>
//                 <h2>infor</h2>
//                 <button onClick={this.add}>添加一个小王</button>
//                 <h3>使用index(索引值）作为KEY，可能存在问题</h3>
//                 <ul>
//                     {this.state.persons.map(
//                         (personObj,index)=>{return(<li key={index}>{personObj.name}:{personObj.age}
//                         <input type='text'/></li>)}
//                     )}
//                 </ul>
//                 <hr/>
//                 <hr/>
//                 <h3>使用id(数据的唯一索引）作为KEY，正确做法</h3>
//                 {this.state.persons.map(
//                     (personObj)=>{return(<li key={personObj.id}>{personObj.name}:{personObj.age}
//                         <input type='text'/></li>)}
//                 )}
//             </div>
//         )
//     }

// }
// ReactDOM.render(<App27  />, document.getElementById("root"))
//////////////////////////////////
