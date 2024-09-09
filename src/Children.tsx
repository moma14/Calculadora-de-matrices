import React, {ReactNode} from 'react';

    const Card: React.FC<{children: ReactNode}>=({children})=>{
    return <div className='card'>{children}</div>
    };

    export default Card;