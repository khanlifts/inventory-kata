import type { Item } from "./interfaces.ts";

export const generateId = (items: Item[]): number => {
  return items.length === 0 ? 1 : Math.max(...items.map(item => item.id), 0) + 1;
}

export const storageKeys = {
  INVENTORY: 'app-inventory-items'
} as const;

export const getDefaultItems = (): Item[] => {
  return [
    { id: 1, name: 'Laptop', quantity: 3 },
    { id: 3, name: 'Monitor', quantity: 5 },
    { id: 5, name: 'Chair', quantity: 7 }
  ]
}

export const getStoredItems = (): Item[] => {
  const storageItems = localStorage.getItem(storageKeys.INVENTORY);

  if (storageItems) {
    return JSON.parse(storageItems);
  }

  return getDefaultItems();
}