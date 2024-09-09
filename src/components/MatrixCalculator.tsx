import React, { useState, ChangeEvent } from 'react';
import Button from './Button';

const MatrixCalculator: React.FC = () => {
    const [matrix1x1, setMatrix1x1] = useState<number>(0);
    const [matrix2x2_1, setMatrix2x2_1] = useState<number[][]>([[0, 0], [0, 0]]);
    const [matrix2x2_2, setMatrix2x2_2] = useState<number[][]>([[0, 0], [0, 0]]);
    const [matrix3x3_1, setMatrix3x3_1] = useState<number[][]>([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    const [matrix3x3_2, setMatrix3x3_2] = useState<number[][]>([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    const [determinant, setDeterminant] = useState<number | null>(null);
    const [resultMatrix, setResultMatrix] = useState<number[][] | null>(null);
    const [operation, setOperation] = useState<string>('add');

    const handleInputChange1x1 = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setMatrix1x1(value);
    };

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement>,
        i: number,
        j: number,
        size: number,
        matrixNumber: number
    ) => {
        const value = parseFloat(e.target.value);
        if (size === 2) {
            const newMatrix = matrixNumber === 1 ? [...matrix2x2_1] : [...matrix2x2_2];
            newMatrix[i][j] = value;
            matrixNumber === 1 ? setMatrix2x2_1(newMatrix) : setMatrix2x2_2(newMatrix);
        } else {
            const newMatrix = matrixNumber === 1 ? [...matrix3x3_1] : [...matrix3x3_2];
            newMatrix[i][j] = value;
            matrixNumber === 1 ? setMatrix3x3_1(newMatrix) : setMatrix3x3_2(newMatrix);
        }
    };

    const handleOperationChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setOperation(e.target.value);
    };

    const calculateDeterminant1x1 = () => {
        setDeterminant(matrix1x1);
        setResultMatrix(null);
    };

    const calculateDeterminant2x2 = () => {
        const det = matrix2x2_1[0][0] * matrix2x2_1[1][1] - matrix2x2_1[0][1] * matrix2x2_1[1][0];
        setDeterminant(det);
        setResultMatrix(null);
    };

    const calculateDeterminant3x3 = () => {
        const a = matrix3x3_1[0][0], b = matrix3x3_1[0][1], c = matrix3x3_1[0][2];
        const d = matrix3x3_1[1][0], e = matrix3x3_1[1][1], f = matrix3x3_1[1][2];
        const g = matrix3x3_1[2][0], h = matrix3x3_1[2][1], i = matrix3x3_1[2][2];

        const det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
        setDeterminant(det);
        setResultMatrix(null);
    };

    const performOperation2x2 = () => {
        let result: number[][] = [[0, 0], [0, 0]];

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                switch (operation) {
                    case 'add':
                        result[i][j] = matrix2x2_1[i][j] + matrix2x2_2[i][j];
                        break;
                    case 'subtract':
                        result[i][j] = matrix2x2_1[i][j] - matrix2x2_2[i][j];
                        break;
                    case 'multiply':
                        if (i === 0 && j === 0) {
                            result[i][j] = matrix2x2_1[0][0] * matrix2x2_2[0][0] + matrix2x2_1[0][1] * matrix2x2_2[1][0];
                        } else if (i === 0 && j === 1) {
                            result[i][j] = matrix2x2_1[0][0] * matrix2x2_2[0][1] + matrix2x2_1[0][1] * matrix2x2_2[1][1];
                        } else if (i === 1 && j === 0) {
                            result[i][j] = matrix2x2_1[1][0] * matrix2x2_2[0][0] + matrix2x2_1[1][1] * matrix2x2_2[1][0];
                        } else if (i === 1 && j === 1) {
                            result[i][j] = matrix2x2_1[1][0] * matrix2x2_2[0][1] + matrix2x2_1[1][1] * matrix2x2_2[1][1];
                        }
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
                        result[i][j] = matrix3x3_1[i][j] + matrix3x3_2[i][j];
                        break;
                    case 'subtract':
                        result[i][j] = matrix3x3_1[i][j] - matrix3x3_2[i][j];
                        break;
                    case 'multiply':
                        result[i][j] =
                            matrix3x3_1[i][0] * matrix3x3_2[0][j] +
                            matrix3x3_1[i][1] * matrix3x3_2[1][j] +
                            matrix3x3_1[i][2] * matrix3x3_2[2][j];
                        break;
                    default:
                        break;
                }
            }
        }

        setResultMatrix(result);
        setDeterminant(null);
    };

    return (
        <div>

            <div>
                <h3>Matriz 1x1</h3>
                <input
                    type="number"
                    value={matrix1x1}
                    onChange={handleInputChange1x1}
                />
                <select onChange={handleOperationChange}>
                    <option value="add">Suma</option>
                    <option value="subtract">Resta</option>
                    <option value="multiply">Multiplicación</option>
                </select>
                <button onClick={calculateDeterminant1x1}>Calcular Determinante 1x1</button>
            </div>

            <div>
                <h3>Matriz 2x2</h3>
                <div className='card'>
                <h3>X</h3>
                    {matrix2x2_1.map((row, i) => (
                        <div key={i}>
                            {row.map((_, j) => (
                                <input
                                    key={j}
                                    type="number"
                                    value={matrix2x2_1[i][j]}
                                    onChange={(e) => handleInputChange(e, i, j, 2, 1)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <div>
                <h3>Y</h3>
                    {matrix2x2_2.map((row, i) => (
                        <div key={i}>
                            {row.map((_, j) => (
                                <input
                                    key={j}
                                    type="number"
                                    value={matrix2x2_2[i][j]}
                                    onChange={(e) => handleInputChange(e, i, j, 2, 2)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <select onChange={handleOperationChange}>
                    <option value="add">Suma</option>
                    <option value="subtract">Resta</option>
                    <option value="multiply">Multiplicación</option>
                </select>
                <button onClick={calculateDeterminant2x2}>Calcular Determinante 2x2</button>
                <Button value="Calcular operacion 2x2" onClick={performOperation2x2}/>
            </div>

            <div>
                <h3>Matriz 3x3</h3>
                <div>
                <h3>X</h3>
                    {matrix3x3_1.map((row, i) => (
                        <div key={i}>
                            {row.map((_, j) => (
                                <input
                                    key={j}
                                    type="number"
                                    value={matrix3x3_1[i][j]}
                                    onChange={(e) => handleInputChange(e, i, j, 3, 1)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <div>
                <h3>Y</h3>
                    {matrix3x3_2.map((row, i) => (
                        <div key={i}>
                            {row.map((_, j) => (
                                <input
                                    key={j}
                                    type="number"
                                    value={matrix3x3_2[i][j]}
                                    onChange={(e) => handleInputChange(e, i, j, 3, 2)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <select onChange={handleOperationChange}>
                    <option value="add">Suma</option>
                    <option value="subtract">Resta</option>
                </select>
                <button onClick={calculateDeterminant3x3}>Calcular Determinante 3x3</button>
                <Button value="Calcular operacion 3x3" onClick={performOperation3x3}/>
            </div>

            {determinant !== null && (
                <div>
                    <h3>Determinante: {determinant}</h3>
                </div>
            )}

            {resultMatrix && (
                <div>
                    <h3>Matriz Resultante:</h3>
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
    );
};

export default MatrixCalculator;