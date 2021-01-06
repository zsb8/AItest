import React from 'react';
import '../styles/_rocket.scss';

const SECONDS_TO_TAKEOFF = 5;
const MS_TO_TAKEOFF = SECONDS_TO_TAKEOFF * 1000;
const FINAL_POSITION_BOTTOM_VAL = 'calc(400px)';

function timeToPositionPercent(startTime) {
  const now = Date.now(); //位置会变化
  const timeDiff = now - startTime; //点火时间改0不动

  if (timeDiff >= MS_TO_TAKEOFF) { return FINAL_POSITION_BOTTOM_VAL; }

  return `calc(300px + ${((timeDiff / MS_TO_TAKEOFF) * 100).toFixed(0)}%)`;
}

function generateEmptyListEls(quantity) {
  return [...Array(quantity)].map(() => <li />);
}

export default function RocketCore({ initialLaunchTime }) {
  return (
    <>
      <div className="rocket" 
      style={{ bottom: timeToPositionPercent(initialLaunchTime) }}>
        <div className="rocket__body">
          <div className="rocket__body__main"/>
          <div className="rocket__body__fin rocket__body__fin__left"/>
          <div className="rocket__body__fin rocket__body__fin__right"/>
          <div className="rocket__body__window"/>
        </div>
        <div className="rocket__exhaust__flame"/>
        <ul className="rocket__exhaust__fumes">
          火箭形状9
          {generateEmptyListEls(9)}
        </ul>
      </div>
      <ul className="stars">
        背景7
        {generateEmptyListEls(7)}
      </ul>
    </>
  );
}
