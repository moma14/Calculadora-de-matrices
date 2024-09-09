import React, { ChangeEvent } from 'react';

interface Matrix2x2Props {
  matrixX: number[][];
  matrixY: number[][];
  onChangeX: (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => void;
  onChangeY: (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => void;
  onCalculate: () => void;
}

const Matrix2x2: React.FC<Matrix2x2Props> = ({ matrixX, matrixY, onChangeX, onChangeY, onCalculate }) => {
  return (
    <div>
      <h3>Matriz 2x2</h3>
      <div>
        <h4>X</h4>
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
        <h4>Y</h4>
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
      <button onClick={onCalculate}>Calcular Determinante 2x2</button>
    </div>
  );
};

export default Matrix2x2;