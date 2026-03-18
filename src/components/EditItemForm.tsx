import { useState } from "react";

interface EditItemFormProps {
  currentName: string;
  onSave: (newName: string) => void,
  onCancel: () => void
}

export default function EditItemForm({
  currentName,
  onSave,
  onCancel
  }: EditItemFormProps) {
  const [editValue, setEditValue] = useState(currentName);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (editValue.trim().length < 3) {
      setError('Item muss mindestens 3 Buchstaben haben!');
      return;
    }

    onSave(editValue);
    setError('');
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Item bearbeiten"
        value={editValue}
        onChange={e => setEditValue(e.target.value)}
      />
      <button type="submit">speichern</button>
      <button type="button" onClick={onCancel}>abbrechen</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}