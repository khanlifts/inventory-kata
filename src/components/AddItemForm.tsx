import { useState } from "react";

export default function AddItemForm({ onAddItem }: { onAddItem: (name: string) => void }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    onAddItem(inputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>Hinzufügen</button>
    </form>
  )
}