import React from "react";
import { ButtonProps } from '../ButtonProps';

// aqui se define un componente funcional llamado 'button' que acepta propiedades de tipo 'ButtonProps'
const button: React.FC<ButtonProps> = ({ value, onClick }) => {
    return (
        // El botón ejecutará la función 'onClick' cuando se presione
        <button className="operator" onClick={onClick}>
            {/* se muestra el valor de la propiedad 'value' dentro del botón */}
            {value}
        </button>
    );
}

export default button;
