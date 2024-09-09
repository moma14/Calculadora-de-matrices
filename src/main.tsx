import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Card from './Children'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Card>
    <h2>Calculadora de matrices</h2>
    </Card> 
    <App /> 
  </StrictMode>,
)

