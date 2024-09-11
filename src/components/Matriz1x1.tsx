import React, { ChangeEvent } from 'react';

interface Matrix1x1Props {
  valueX: number; // Valor del elemento X en la matriz 1x1
  valueY: number; // Valor del elemento Y en la matriz 1x1
  onChangeX: (e: ChangeEvent<HTMLInputElement>) => void; //  se ejecuta cuando el valor de X cambia
  onChangeY: (e: ChangeEvent<HTMLInputElement>) => void; // se ejecuta cuando el valor de Y cambia
  onCalculate: () => void; // esta función se ejecuta cuando se hace clic en el botón para calcular
}

// Definimos un componente funcional llamado 'Matrix1x1' '
const Matrix1x1: React.FC<Matrix1x1Props> = ({ valueX, valueY, onChangeX, onChangeY, onCalculate }) => {
  return (
    <div className="container-card bg-green-box">
      <p className="card-title">Matriz 1x1</p>
      
      {/* aqui va el contenido de la matriz X de 1x1 */}
      <p className="card-title">X</p>
      <p className="card-description">
        <input 
          type="number" 
          value={valueX} 
          onChange={onChangeX} 
          aria-label="Matriz 1x1 X" 
        />
      </p>

      {/* aqui va el contenido de la matriz Y de 1x1 */}
      <p className="card-title">Y</p>
      <p className="card-description">
        <input 
          type="number" 
          value={valueY} 
          onChange={onChangeY} 
          aria-label="Matriz 1x1 Y" 
        />
        <br />
        <br />

        {/* este boton es para calcular el determinante de la matriz */}
        <button onClick={onCalculate}>Calcular Determinante 1x1</button>
      </p>
    </div>
  );
};

export default Matrix1x1;
