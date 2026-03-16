import { useState } from "react";

export default function AddItemForm({ onAddItem }: { onAddItem: (name: string) => void }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    if (inputValue.length <= 2) {
      setError('Item muss mehr als 2 Buchstaben haben!');
      return;
    }

    onAddItem(inputValue);
    setInputValue('');
    setError('');
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}