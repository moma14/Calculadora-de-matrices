// OperationSelector.tsx
import React, { ChangeEvent } from 'react';

interface OperationSelectorProps {
  operation: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const OperationSelector: React.FC<OperationSelectorProps> = ({ operation, onChange }) => {
  return (
    <div>
      <select value={operation} onChange={onChange}>
        <option value="add">Suma</option>
        <option value="subtract">Resta</option>
        <option value="multiply">Multiplicación</option>
      </select>
    </div>
  );
};

export default OperationSelector;
