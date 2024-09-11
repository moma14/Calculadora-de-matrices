import React, { ChangeEvent } from 'react';

// Definimos la interfaz de las propiedades que el componente Matrix3x3 aceptará
interface Matrix3x3Props {
  matrixX: number[][]; // Matriz 3x3 para los valores de X
  matrixY?: number[][]; // Matriz 3x3 para los valores de Y
  onChangeX: (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => void; // se ejecuta cuando un valor en la matriz X cambia
  onChangeY?: (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => void; // se ejecuta cuando un valor en la matriz Y cambia
  onCalculate: () => void; // esta funcion se ejecuta cuando se hace clic en el botón para calcular
  hideMatrixY?: boolean; 
}

// Definimos un componente funcional llamado 'Matrix3x3' que acepta las propiedades definidas en 'Matrix3x3Props'
const Matrix3x3: React.FC<Matrix3x3Props> = ({ matrixX, matrixY, onChangeX, onChangeY, onCalculate, hideMatrixY }) => {
  return (
    <div className='container-card bg-yellow-box'>
      <p className='card-title'>Matriz 3x3</p>
      
      {/* aqui va el contenido de la matriz X de 3x3*/}
      <div>
        <p className='card-title'>X</p>
        {matrixX.map((row, i) => (
          <div key={i}>
            {row.map((_, j) => (
              <input
                key={j}
                type="number"
                aria-label={`Matriz 3x3 X [${i}][${j}]`}
                value={matrixX[i][j]}
                onChange={(e) => onChangeX(e, i, j)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* aqui va el contenido de la matriz Y de 3x3*/}
      {!hideMatrixY && matrixY && (
        <div>
          <p className='card-title'>Y</p>
          {matrixY.map((row, i) => (
            <div key={i}>
              {row.map((_, j) => (
                <input
                  key={j}
                  type="number"
                  aria-label={`Matriz 3x3 Y [${i}][${j}]`}
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
      <button onClick={onCalculate}>Calcular Determinante 3x3</button>
    </div>
  );
};

export default Matrix3x3;
