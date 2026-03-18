import { useState } from 'react';
import InventoryApp from './InventoryApp.tsx';
import InventoryAppAPI from "./InventoryAppAPI.tsx";

export default function InventoryAppWrapper() {
  const [useAPI, setUseAPI] = useState(false);

  return (
    <div>
      <div style={{ marginBottom: '20px', padding: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={useAPI}
            onChange={(e) => setUseAPI(e.target.checked)}
          />
          {' '}API Mode verwenden
        </label>
        <p style={{ fontSize: '12px' }}>
          {useAPI
            ? '✅ API Mode aktiv (starte: pnpm api)'
            : '📁 localStorage Mode aktiv'}
        </p>
      </div>

      {useAPI ? <InventoryAppAPI /> : <InventoryApp />}
    </div>
  );
}
