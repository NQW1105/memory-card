import React from 'react';
import Card from './Card';

function CardList(props) {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Array Sort Method */}
      {props.zodiac
        .sort(() => {
          return 0.5 - Math.random();
        })
        .map((animalObj) => {
          return (
            <Card
              key={animalObj.animal}
              character={animalObj.character}
              zodiac={animalObj.word}
              incrementScore={props.incrementScore}
              incrementBestScore={props.incrementBestScore}
            />
          );
        })}
    </div>
  );
}

export default CardList;