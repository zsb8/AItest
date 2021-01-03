import './App.css';
import Hello from './components/Hello/index.js'
import Welcome from './components/Welcome/index.js'

//创建外壳组件APP
import React,{Component} from 'react'
//创建并暴露APP
export default class App extends Component {
    render(){
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )       
    }
}

