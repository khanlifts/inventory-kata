import type { Item } from "../utilities/interfaces.ts";

export default function InventoryList(
  { items,
    onIncreaseQuantity,
    onDeleteItem
  }:
  {
    items: Item[],
    onIncreaseQuantity: (id: number) => void,
    onDeleteItem: (id: number) => void
  }
) {
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Menge: {item.quantity}</p>
            <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
            <button onClick={() => onDeleteItem(item.id)}>entfernen</button>
          </li>
        ))}
      </ul>
    </div>
  )
}