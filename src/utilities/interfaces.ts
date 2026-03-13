export interface Item {
  id: number;
  name: string;
  quantity: number;
}

export interface InventoryListProps {
  items: Item[]
}