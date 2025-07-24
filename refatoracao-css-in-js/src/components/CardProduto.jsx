import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  width: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  margin: 16px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ProductName = styled.h3`
  color: #333;
  margin: 0 0 8px 0;
  font-size: 1.2rem;
`;

const ProductPrice = styled.p`
  color: #666;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 0 16px 0;
`;

const AddButton = styled.button`
  background-color: ${props => props.adicionado ? '#198754' : '#6c757d'};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.adicionado ? '#157347' : '#5c636a'};
  }
`;

const CardProduto = ({ nome, preco, adicionado, onAdicionar }) => {
  return (
    <CardContainer>
      <ProductName>{nome}</ProductName>
      <ProductPrice>R$ {preco.toFixed(2)}</ProductPrice>
      <AddButton 
        adicionado={adicionado}
        onClick={onAdicionar}
      >
        {adicionado ? 'Adicionado ✔' : 'Adicionar ao carrinho'}
      </AddButton>
    </CardContainer>
  );
};

export default CardProduto;