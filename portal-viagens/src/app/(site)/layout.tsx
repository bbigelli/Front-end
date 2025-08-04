import { ReactNode } from 'react';
import Layout from '../components/Layout';


export const metadata = {
  title: 'Portal de Viagens',
  description: 'Descubra os melhores destinos turísticos',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}