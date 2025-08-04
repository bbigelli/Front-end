import { notFound } from 'next/navigation';

import { destinos } from '../../../data/destinos';

import styles from '../../../styles/Layout.module.css';

interface Params {
  id: string;
}

export default function DestinoDetails({ params }: { params: Params }) {
  const destino = destinos.find(d => d.id === Number(params.id));
  
  if (!destino) {
    notFound();
  }

  return (
    <div className={styles.detalhesContainer}>
      <h1>{destino.nome}</h1>
      <div className={styles.detalhesContent}>
        <img 
          src={destino.imagem} 
          alt={destino.nome} 
          className={styles.detalhesImagem}
          width={500}
          height={350}
        />
        <div className={styles.detalhesInfo}>
          <p><strong>Descrição:</strong> {destino.descricao}</p>
          <p><strong>Preço médio:</strong> R$ {destino.precoMedio.toLocaleString('pt-BR')}</p>
          <p><strong>Clima:</strong> {destino.clima}</p>
        </div>
      </div>
    </div>
  );
}