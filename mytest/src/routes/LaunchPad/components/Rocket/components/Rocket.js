import React, { useState, Component } from 'react';
import RocketCore from './RocketCore';

export function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now());
  return <RocketCore initialLaunchTime={initialLaunchTime} />;
}

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
      //initialLaunchTime: 0  就不会发射了。
    };
  }

  render() {
    const { initialLaunchTime } = this.state;
    {console.log('initialLaunchTime=====:',initialLaunchTime)}

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
