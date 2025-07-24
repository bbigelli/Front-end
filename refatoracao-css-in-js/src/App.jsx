import React, { useState } from 'react';
import CardProduto from './components/CardProduto';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 30px;
`;

const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

function App() {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Notebook Premium', preco: 4500.00, adicionado: false },
    { id: 2, nome: 'Smartphone Top', preco: 3200.00, adicionado: false },
    { id: 3, nome: 'Fones Bluetooth', preco: 350.00, adicionado: false },
    { id: 4, nome: 'Tablet', preco: 1200.00, adicionado: false },
  ]);

  const toggleAdicionar = (id) => {
    setProdutos(produtos.map(produto => 
      produto.id === id 
        ? { ...produto, adicionado: !produto.adicionado } 
        : produto
    ));
  };

  return (
    <AppContainer>
      <Title>Loja de Eletrônicos</Title>
      <ProductsGrid>
        {produtos.map(produto => (
          <CardProduto
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            adicionado={produto.adicionado}
            onAdicionar={() => toggleAdicionar(produto.id)}
          />
        ))}
      </ProductsGrid>
    </AppContainer>
  );
}

export default App;