import React, { ChangeEvent } from 'react';

interface Matrix1x1Props {
  valueX: number;
  valueY: number;
  onChangeX: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeY: (e: ChangeEvent<HTMLInputElement>) => void;
  onCalculate: () => void;
}

const Matrix1x1: React.FC<Matrix1x1Props> = ({ valueX, valueY, onChangeX, onChangeY, onCalculate }) => {
  return (
    <div className="container-card bg-green-box">
      <p className="card-title">Matriz 1x1</p>
      <p className="card-title">X</p>
      <p className="card-description">
      <input type="number" value={valueX} onChange={onChangeX} />
      </p>
      <p className="card-title">Y</p>
      <p className="card-description">
      <input type="number" value={valueY} onChange={onChangeY} />
      <button onClick={onCalculate}>Calcular Determinante 1x1</button>
      </p>
    </div>
  );
};

export default Matrix1x1;