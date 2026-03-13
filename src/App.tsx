import './index.css';
import InventoryList from "./components/InventoryList.tsx";
import { useState } from "react";
import type { Item } from "./utilities/interfaces.ts";
import AddItemForm from "./components/AddItemForm.tsx";
import { generateId } from "./utilities/helper-functions.ts";

function App() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Laptop', quantity: 3 },
    { id: 3, name: 'Monitor', quantity: 5 },
    { id: 5, name: 'Chair', quantity: 7 }
  ])

  const increaseQuantity = (id: number) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  const addItem = (name: string) => {
    const newId = generateId(items);
    setItems(prev => [...prev, { id: newId, name, quantity: 1 }]);
  }

  return (
    <div>
      <h1>Inventar Liste</h1>
      <AddItemForm onAddItem={addItem}/>
      <InventoryList items={items} onIncreaseQuantity={increaseQuantity}/>
    </div>
  )
}

export default App
