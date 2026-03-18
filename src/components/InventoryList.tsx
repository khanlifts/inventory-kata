import type { Item } from "../utilities/interfaces.ts";
import { useState } from "react";
import EditItemForm from "./EditItemForm.tsx";

interface InventoryListProps {
  items: Item[],
  onIncreaseQuantity: (id: number) => void,
  onDeleteItem: (id: number) => void,
  onEditItem: (id: number, newName: string) => void
}

export default function InventoryList(
  { items,
    onIncreaseQuantity,
    onDeleteItem,
    onEditItem
  }: InventoryListProps
) {

  const [editId, setEditId] = useState<number | null>(null);

  const handleSave = (id: number, newName: string) => {
    onEditItem(id, newName);
    setEditId(null);
  }

  const handleCancel = () => {
    setEditId(null);
  }

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {editId === item.id ? (
              <div>
                <EditItemForm
                  currentName={item.name}
                  onSave={newName => handleSave(item.id, newName)}
                  onCancel={handleCancel}
                />
              </div>
            ): (
              <div>
                <p>{item.name}</p>
                <p>Menge: {item.quantity}</p>
                <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
                <button onClick={() => setEditId(item.id)}>bearbeiten</button>
                <button onClick={() => onDeleteItem(item.id)}>entfernen</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}