import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Card from './Children'
import Button from './MatriZod'

const root=ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);  

root.render(
<React.StrictMode>
   <Card>
    <h2>Calculadora de matrices</h2>
    <Button text='Haz click aqui' onClick={()=> console.log('¡Click!')}/>
    </Card> 
    <App /> 
  </React.StrictMode>,
)

