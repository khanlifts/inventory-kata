import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InventoryAppWrapper from "./apps/InventoryAppWrapper.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InventoryAppWrapper />
  </StrictMode>,
)
