import { useEffect, useState } from "react";
import type { Item } from "../utilities/interfaces.ts";
import InventoryList from "../components/InventoryList.tsx";
import AddItemForm from "../components/AddItemForm.tsx";
import { generateId, getStoredItems, storageKeys } from "../utilities/helper-functions.ts";

export default function InventoryAppAPI() {
  const [items, setItems] = useState<Item[]>(getStoredItems())

  useEffect(() => {
    localStorage.setItem(storageKeys.INVENTORY, JSON.stringify(items));
  }, [items])

  const increaseQuantity = (id: number) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  const addItem = (name: string) => {
    const newId = generateId(items);
    setItems(prev => [...prev, { id: newId, name, quantity: 1 }]);
  }

  const deleteItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  const editItem = (id: number, newName: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, name: newName } : item))
  }

  return (
    <div>
      <h1>Inventar Liste</h1>
      <AddItemForm onAddItem={addItem}/>
      <InventoryList
        items={items}
        onIncreaseQuantity={increaseQuantity}
        onDeleteItem={deleteItem}
        onEditItem={editItem}
      />
    </div>
  )
}
