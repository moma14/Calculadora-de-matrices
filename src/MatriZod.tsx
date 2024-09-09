import { z } from 'zod';

const ButtonPropsSquema= z.object({
    text:z.string().min(1),
    onClick:z.function(),
    disabled:z.boolean().optional(),
});

const Button:React.FC<z.infer<typeof ButtonPropsSquema>>=(props)=>{
    return(
        <button onClick={props.onClick} disabled={props.disabled}>
          {props.text}
        </button>
    );
};

export default Button;