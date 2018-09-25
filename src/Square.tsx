import * as React from 'react';

interface ISquareProps {
  value: string;
  onClick(): void;
}

export default function Square(props: ISquareProps): JSX.Element {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}
