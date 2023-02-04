import React from 'react';

function Card(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.incrementScore();
        props.incrementBestScore();
      }}
    >
      <div className="border-4 rounded-lg border-amber-500 p-5">
        <p className="text-7xl text-amber-500">{props.character}</p>
        <p className="text-3xl text-center text-amber-500">{props.zodiac}</p>
      </div>
    </div>
  );
}

export default Card;
