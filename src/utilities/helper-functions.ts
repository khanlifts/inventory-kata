import type { Item } from "./interfaces.ts";

export const generateId = (items: Item[]): number => {
  return items.length === 0 ? 1 : Math.max(...items.map(item => item.id), 0) + 1;
}