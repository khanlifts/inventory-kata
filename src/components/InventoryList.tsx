import type { Item } from "../utilities/interfaces.ts";

export default function InventoryList(
  { items, onIncreaseQuantity }:
  { items: Item[], onIncreaseQuantity: (id: number) => void }
) {
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Menge: {item.quantity}</p>
            <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  )
}