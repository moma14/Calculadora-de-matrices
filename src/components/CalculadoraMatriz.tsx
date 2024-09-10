import React, { useState, ChangeEvent, useEffect } from 'react';
import Matrix1x1 from './Matriz1x1';
import Matrix2x2 from './Matriz2x2';
import Matrix3x3 from './Matriz3x3';
import OperationSelector from './SelectorOperaciones';
import Button from '../MatriZod'; // Asegúrate de que la ruta sea correcta
import './MatrixCalculator.css'
import './Button.css'

const MatrixCalculator: React.FC = () => {
    const [matrix1x1X, setMatrix1x1X] = useState<number>(0);
    const [matrix1x1Y, setMatrix1x1Y] = useState<number>(0);
    const [matrix2x2X, setMatrix2x2X] = useState<number[][]>([[0, 0], [0, 0]]);
    const [matrix2x2Y, setMatrix2x2Y] = useState<number[][]>([[0, 0], [0, 0]]);
    const [matrix3x3X, setMatrix3x3X] = useState<number[][]>([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    const [matrix3x3Y, setMatrix3x3Y] = useState<number[][]>([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    const [determinant, setDeterminant] = useState<number | null>(null);
    const [resultMatrix, setResultMatrix] = useState<number[][] | null>(null);
    const [result1x1, setResult1x1] = useState<number | null>(null); // Resultado de la operación 1x1
    const [operation, setOperation] = useState<string>('add');

    // Funciones de cálculo de determinantes
    const calculateDeterminant1x1 = () => setDeterminant(matrix1x1X);
    
    const calculateDeterminant2x2 = () => {
        const det = matrix2x2X[0][0] * matrix2x2X[1][1] - matrix2x2X[0][1] * matrix2x2X[1][0];
        setDeterminant(det);
    };

    const calculateDeterminant3x3 = () => {
        const [a, b, c] = matrix3x3X[0];
        const [d, e, f] = matrix3x3X[1];
        const [g, h, i] = matrix3x3X[2];
        const det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
        setDeterminant(det);
    };

    // Funciones de manejo de matrices
    const handleInputChange1x1X = (e: ChangeEvent<HTMLInputElement>) => setMatrix1x1X(parseFloat(e.target.value));
    const handleInputChange1x1Y = (e: ChangeEvent<HTMLInputElement>) => setMatrix1x1Y(parseFloat(e.target.value));

    const handleMatrixChange2x2X = (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => {
        const newMatrix = [...matrix2x2X];
        newMatrix[i][j] = parseFloat(e.target.value);
        setMatrix2x2X(newMatrix);
    };

    const handleMatrixChange2x2Y = (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => {
        const newMatrix = [...matrix2x2Y];
        newMatrix[i][j] = parseFloat(e.target.value);
        setMatrix2x2Y(newMatrix);
    };

    const handleMatrixChange3x3X = (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => {
        const newMatrix = [...matrix3x3X];
        newMatrix[i][j] = parseFloat(e.target.value);
        setMatrix3x3X(newMatrix);
    };

    const handleMatrixChange3x3Y = (e: ChangeEvent<HTMLInputElement>, i: number, j: number) => {
        const newMatrix = [...matrix3x3Y];
        newMatrix[i][j] = parseFloat(e.target.value);
        setMatrix3x3Y(newMatrix);
    };

    const handleOperationChange = (e: ChangeEvent<HTMLSelectElement>) => setOperation(e.target.value);

    // Operación para la matriz 1x1
    const performOperation1x1 = () => {
        let result: number;

        switch (operation) {
            case 'add':
                result = matrix1x1X + matrix1x1Y;
                break;
            case 'subtract':
                result = matrix1x1X - matrix1x1Y;
                break;
            case 'multiply':
                result = matrix1x1X * matrix1x1Y;
                break;
            default:
                result = 0;
        }

        setResult1x1(result);
        setDeterminant(null); // Limpiar el valor del determinante si se hace una operación
    };

    // Operaciones de suma, resta y multiplicación para matrices 2x2 y 3x3
    const performOperation2x2 = () => {
        let result: number[][] = [[0, 0], [0, 0]];

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                switch (operation) {
                    case 'add':
                        result[i][j] = matrix2x2X[i][j] + matrix2x2Y[i][j];
                        break;
                    case 'subtract':
                        result[i][j] = matrix2x2X[i][j] - matrix2x2Y[i][j];
                        break;
                    case 'multiply':
                        result[i][j] =
                            matrix2x2X[i][0] * matrix2x2Y[0][j] + matrix2x2X[i][1] * matrix2x2Y[1][j];
                        break;
                    default:
                        break;
                }
            }
        }

        setResultMatrix(result);
        setDeterminant(null);
    };

    const performOperation3x3 = () => {
        let result: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                switch (operation) {
                    case 'add':
                        result[i][j] = matrix3x3X[i][j] + matrix3x3Y[i][j];
                        break;
                    case 'subtract':
                        result[i][j] = matrix3x3X[i][j] - matrix3x3Y[i][j];
                        break;
                    case 'multiply':
                        result[i][j] =
                            matrix3x3X[i][0] * matrix3x3Y[0][j] +
                            matrix3x3X[i][1] * matrix3x3Y[1][j] +
                            matrix3x3X[i][2] * matrix3x3Y[2][j];
                        break;
                    default:
                        break;
                }
            }
        }

        setResultMatrix(result);
        setDeterminant(null);
    };

    // useEffect para recalcular operaciones al cambiar las matrices o la operación
    useEffect(() => {
        if (operation === 'add' || operation === 'subtract' || operation === 'multiply') {
            performOperation1x1();
        }
    }, [matrix1x1X, matrix1x1Y, operation]);

    useEffect(() => {
        if (operation === 'add' || operation === 'subtract' || operation === 'multiply') {
            performOperation2x2();
        }
    }, [matrix2x2X, matrix2x2Y, operation]);

    useEffect(() => {
        if (operation === 'add' || operation === 'subtract' || operation === 'multiply') {
            performOperation3x3();
        }
    }, [matrix3x3X, matrix3x3Y, operation]);

    // Reset function
    const resetView = () => {
        setMatrix1x1X(0);
        setMatrix1x1Y(0);
        setMatrix2x2X([[0, 0], [0, 0]]);
        setMatrix2x2Y([[0, 0], [0, 0]]);
        setMatrix3x3X([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
        setMatrix3x3Y([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
        setDeterminant(null);
        setResultMatrix(null);
        setResult1x1(null);
        setOperation('add');
    };

    return (
        <div className="container">
            <p className="container-title">Calculadora de matrices</p>

            <div className="gradient-cards">
            <div className="card">             
            <Matrix1x1 
                valueX={matrix1x1X} 
                valueY={matrix1x1Y} 
                onChangeX={handleInputChange1x1X} 
                onChangeY={handleInputChange1x1Y} 
                onCalculate={calculateDeterminant1x1} 
            />
            </div>

            <div className="card">
            <Matrix2x2 
                matrixX={matrix2x2X} 
                matrixY={matrix2x2Y} 
                onChangeX={handleMatrixChange2x2X} 
                onChangeY={handleMatrixChange2x2Y} 
                onCalculate={calculateDeterminant2x2} 
            />
            </div>
            
            <div className="card">
            <Matrix3x3 
                matrixX={matrix3x3X} 
                matrixY={matrix3x3Y} 
                onChangeX={handleMatrixChange3x3X} 
                onChangeY={handleMatrixChange3x3Y} 
                onCalculate={calculateDeterminant3x3} 
            />
            </div>

            <div className="card">
                <div className="container-card bg-blue-box">
            <OperationSelector 
                operation={operation} 
                onChange={handleOperationChange} 
            />
                  <br></br>
                  <br></br>

            <Button text="Restablecer Matrices" onClick={resetView} />
            <br></br>
            <br></br>

            {determinant !== null && <div className='result'>Determinante: {determinant}</div>}
            <br></br>
            <br></br>

            {result1x1 !== null && <div className='result'>Resultado 1x1: {result1x1}</div>}

            {resultMatrix && (
                <div>
                    <p className='card-title'>Matriz Resultante:</p>
                    {resultMatrix.map((row, i) => (
                        <div key={i}>
                            {row.map((val, j) => (
                                <span key={j} style={{ marginRight: '10px' }}>
                                    {val}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            )}
            </div>
            </div>
            </div>
        </div>
    );
};

export default MatrixCalculator;
