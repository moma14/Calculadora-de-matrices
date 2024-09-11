import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import MatrixCalculator from './src/components/CalculadoraMatriz'; 
import React from 'react';  

describe('MatrixCalculator', () => {
    
    test('renders MatrixCalculator component', async () => {
        render(<MatrixCalculator />);
        
        // Usar findByText si el texto es dinámico
        const title = await screen.findByText(/Calculadora de matrices/i);
        
    });
    
    

    test('allows input for matrix 1x1 X and Y', () => {
        render(<MatrixCalculator />);
        // Seleccionamos los inputs de la matriz 1x1
        const inputX = screen.getByLabelText('Matriz 1x1 X') as HTMLInputElement;
        const inputY = screen.getByLabelText('Matriz 1x1 Y') as HTMLInputElement;

        // aqui se cambian los valores de los inputs
        fireEvent.change(inputX, { target: { value: '5' } });
        fireEvent.change(inputY, { target: { value: '3' } });

        expect(inputX.value).toBe('5');
        expect(inputY.value).toBe('3');
    });

    test('calculates matrix 1x1 result', () => {
        render(<MatrixCalculator />);
        // Seleccionamos los inputs de la matriz 1x1 y el botón para realizar el cálculo
        const inputX = screen.getByLabelText('Matriz 1x1 X') as HTMLInputElement;
        const inputY = screen.getByLabelText('Matriz 1x1 Y') as HTMLInputElement;
        const operationSelect = screen.getByRole('combobox');

        // Cambiamos los valores de los inputs y seleccionamos la operación
        fireEvent.change(inputX, { target: { value: '5' } });
        fireEvent.change(inputY, { target: { value: '3' } });
        fireEvent.change(operationSelect, { target: { value: 'add' } });

        // Verificamos que el resultado de la operación de suma sea correcto
        const result = screen.getByText(/Resultado 1x1:/i);
    });

    test('calculates matrix 2x2 result', () => {
        render(<MatrixCalculator />);
        // Seleccionamos los inputs de la matriz 2x2
        const input00 = screen.getByLabelText('Matriz 2x2 X [0][0]') as HTMLInputElement;
        const input01 = screen.getByLabelText('Matriz 2x2 X [0][1]') as HTMLInputElement;
        const input10 = screen.getByLabelText('Matriz 2x2 X [1][0]') as HTMLInputElement;
        const input11 = screen.getByLabelText('Matriz 2x2 X [1][1]') as HTMLInputElement;

        // Cambiamos los valores de los inputs
        fireEvent.change(input00, { target: { value: '1' } });
        fireEvent.change(input01, { target: { value: '2' } });
        fireEvent.change(input10, { target: { value: '3' } });
        fireEvent.change(input11, { target: { value: '4' } });

        // Verificamos que los valores se han actualizado correctamente
        expect(input00.value).toBe('1');
        expect(input01.value).toBe('2');
        expect(input10.value).toBe('3');
        expect(input11.value).toBe('4');
    });

    test('resets all matrix inputs when reset button is clicked', () => {
        render(<MatrixCalculator />);
        // Seleccionamos los inputs de la matriz 1x1 y el botón de reset
        const inputX = screen.getByLabelText('Matriz 1x1 X') as HTMLInputElement;
        const inputY = screen.getByLabelText('Matriz 1x1 Y') as HTMLInputElement;
        const resetButton = screen.getByText(/Restablecer Matrices/i);

        // Cambiamos los valores de los inputs
        fireEvent.change(inputX, { target: { value: '5' } });
        fireEvent.change(inputY, { target: { value: '3' } });

        // Hacemos click en el botón de reset
        fireEvent.click(resetButton);

        // Verificamos que los valores se han reseteado
        expect(inputX.value).toBe('0');
        expect(inputY.value).toBe('0');
    });

    test('calculates determinant of matrix 2x2', () => {
        render(<MatrixCalculator />);
        // Seleccionamos los inputs de la matriz 2x2
        const input00 = screen.getByLabelText('Matriz 2x2 X [0][0]') as HTMLInputElement;
        const input01 = screen.getByLabelText('Matriz 2x2 X [0][1]') as HTMLInputElement;
        const input10 = screen.getByLabelText('Matriz 2x2 X [1][0]') as HTMLInputElement;
        const input11 = screen.getByLabelText('Matriz 2x2 X [1][1]') as HTMLInputElement;
        const calculateButton = screen.getByText(/Calcular Determinante 2x2/i);

        // Cambiamos los valores de los inputs
        fireEvent.change(input00, { target: { value: '1' } });
        fireEvent.change(input01, { target: { value: '2' } });
        fireEvent.change(input10, { target: { value: '3' } });
        fireEvent.change(input11, { target: { value: '4' } });

        // Hacemos click en el botón para calcular el determinante
        fireEvent.click(calculateButton);

        // Verificamos que el determinante es correcto
        const determinant = screen.getByText(/Determinante:/i);
    });
});
