import React, { ChangeEvent } from 'react';


interface Matrix2x2Props {
  matrixX: number[][]; // Matriz 2x2 para los valores de X
  matrixY?: number[][]; // Matriz 2x2 para los valores de Y
  onChangeX: (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => void; // se ejecuta cuando un valor en la matriz X cambia
  onChangeY?: (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => void; // se ejecuta cuando un valor en la matriz Y cambia
  onCalculate: () => void; // esta funcion se ejecuta cuando se hace clic en el botón para calcular
  hideMatrixY?: boolean; 
}

// Definimos un componente funcional llamado 'Matrix2x2' que acepta las propiedades definidas en 'Matrix2x2Props'
const Matrix2x2: React.FC<Matrix2x2Props> = ({ matrixX, matrixY, onChangeX, onChangeY, onCalculate, hideMatrixY }) => {
  return (
    <div className='container-card bg-white-box'>
      <p className='card-title'>Matriz 2x2</p>
      
      {/* aqui va el contenido de la matriz X de 2x2*/}
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

      {/* aqui va el contenido de la matriz Y de 2x2*/}
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
      {/* este boton es para calcular el determinante de la matriz */}
      <button onClick={onCalculate}>Calcular Determinante 2x2</button>
    </div>
  );
};

export default Matrix2x2;
