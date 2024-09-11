import React, { ChangeEvent } from 'react';

interface Matrix2x2Props {
  matrixX: number[][];
  matrixY?: number[][];  // matrixY ahora es opcional
  onChangeX: (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => void;
  onChangeY?: (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => void;  // onChangeY también opcional
  onCalculate: () => void;
  hideMatrixY?: boolean;  // Añadimos esta prop para ocultar Y si es necesario
}

const Matrix2x2: React.FC<Matrix2x2Props> = ({ matrixX, matrixY, onChangeX, onChangeY, onCalculate, hideMatrixY }) => {
  return (
    <div className='container-card bg-white-box'>
      <p className='card-title'>Matriz 2x2</p>
      <div>
        <p className='card-title'>X</p>
        {matrixX.map((row, i) => (
          <div key={i}>
            {row.map((_, j) => (
              <input
                key={j}
                type="number"
                aria-label={`Matriz 2x2 X [${i}][${j}]`}
                value={matrixX[i][j]}
                onChange={(e) => onChangeX(e, i, j)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Renderiza la matriz Y solo si hideMatrixY es falso */}
      {!hideMatrixY && matrixY && (
        <div>
          <p className='card-title'>Y</p>
          {matrixY.map((row, i) => (
            <div key={i}>
              {row.map((_, j) => (
                <input
                  key={j}
                  type="number"
                  aria-label={`Matriz 2x2 Y [${i}][${j}]`}
                  value={matrixY[i][j]}
                  onChange={(e) => onChangeY?.(e, i, j)}
                />
              ))}
            </div>
          ))}
        </div>
      )}

      <br />
      <button onClick={onCalculate}>Calcular Determinante 2x2</button>
    </div>
  );
};

export default Matrix2x2;