import React from 'react';

function Score(props) {
  return (
    <div className="flex justify-center gap-11 mt-8 font-CNY text-4xl text-amber-600">
      <span>Current Score : {props.score}</span>
      <span>Best Score : {props.bestScore}</span>
    </div>
  );
}

export default Score;
