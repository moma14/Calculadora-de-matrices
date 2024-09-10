import React, { ChangeEvent } from 'react';

interface Matrix3x3Props {
  matrixX: number[][];
  matrixY: number[][];
  onChangeX: (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => void;
  onChangeY: (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => void;
  onCalculate: () => void;
}

const Matrix3x3: React.FC<Matrix3x3Props> = ({ matrixX, matrixY, onChangeX, onChangeY, onCalculate }) => {
  return (
    <div className='container-card bg-yellow-box'>
      <p className='card-title'>Matriz 3x3</p>
      <div>
        <p className='card-title'>X</p>
        {matrixX.map((row, i) => (
          <div key={i}>
            {row.map((_, j) => (
              <input
                key={j}
                type="number"
                value={matrixX[i][j]}
                onChange={(e) => onChangeX(e, i, j)}
              />
            ))}
          </div>
        ))}
      </div>
      <div>
        <p className='card-title'>Y</p>
        {matrixY.map((row, i) => (
          <div key={i}>
            {row.map((_, j) => (
              <input
                key={j}
                type="number"
                value={matrixY[i][j]}
                onChange={(e) => onChangeY(e, i, j)}
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={onCalculate}>Calcular Determinante 3x3</button>
    </div>
  );
};

export default Matrix3x3;
