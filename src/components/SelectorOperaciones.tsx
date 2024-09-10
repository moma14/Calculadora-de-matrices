import React, { ChangeEvent } from 'react';
import Card from '../Children'; // Asegúrate de que la ruta sea correcta

interface OperationSelectorProps {
  operation: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const OperationSelector: React.FC<OperationSelectorProps> = ({ operation, onChange }) => {
  return (
    <Card>
      <select value={operation} onChange={onChange}>
        <option value="add">Suma</option>
        <option value="subtract">Resta</option>
        <option value="multiply">Multiplicación</option>
      </select>
    </Card>
  );
};

export default OperationSelector;
