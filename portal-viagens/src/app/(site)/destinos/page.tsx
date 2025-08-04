import { destinos } from '../../data/destinos';
import CardDestino from '../../components/CardDestino';
import styles from '../../styles/Layout.module.css';

import type { Destino } from '../../data/destinos';

export default function DestinosPage() {
  return (
    <div className={styles.destinosContainer}>
        {destinos.map((destino: Destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
  );
}