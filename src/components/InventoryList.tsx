import type { InventoryListProps } from "../utilities/interfaces.ts";

export default function InventoryList({ items }: InventoryListProps) {
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Menge: {item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}