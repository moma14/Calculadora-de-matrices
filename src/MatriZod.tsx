import React from 'react';
import { z } from 'zod';

// Define las propiedades del botón o bien las validaciones
//que este debe tener, por ejemplo:
const ButtonPropsSchema = z.object({
    text: z.string().min(1), // El texto del botón debe ser una cadena no vacía
    onClick: z.custom<() => void>(), // onClick esta como una función sin argumentos y sin retorno usando z.custom
    disabled: z.boolean().optional(), // El botón puede ser opcionalmente deshabilitado
});

// Define la interfaz de las propiedades del botón basada en estas validaciones
interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

class Button extends React.Component<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);

        // Valida las props usando el esquema de zod
        const result = ButtonPropsSchema.safeParse(props);
        if (!result.success) {
            // Lanza un error o maneja la validación según sea necesario
            console.error('Invalid props:', result.error);
        }
    }

    render() {
        const { text, onClick, disabled } = this.props;
         // Renderizamos un botón HTML en la interfaz de usuario
        return (
            <button onClick={onClick} disabled={disabled}>
                {text}
            </button>
        );
    }
}

export default Button;