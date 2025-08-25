import React from 'react';
import styled from 'styled-components';
import { useVehicles } from '../../contexts/VehiclesContext';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const BrandSection = styled.div`
  margin-bottom: 40px;
`;

const BrandTitle = styled.h2`
  color: #333;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

const VehiclesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const VehicleCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const VehicleModel = styled.h3`
  color: #444;
  margin-top: 0;
`;

const VehicleDetail = styled.p`
  color: #666;
  margin: 5px 0;
`;

const Price = styled.p`
  font-weight: bold;
  color: #2a6496;
  font-size: 1.1em;
`;

const Loading = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 1.2em;
  color: #666;
`;

const Error = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 1.2em;
  color: #d9534f;
`;

interface VehicleListProps {
  /**
   * Se verdadeiro, exibe o valor do veículo formatado como moeda
   * @default true
   */
  showPrice?: boolean;
  /**
   * Número de colunas no grid de veículos por marca
   * @default 3
   */
  columns?: number;
}

/**
 * Componente VehicleList - Exibe uma listagem de veículos agrupados por marca
 * 
 * Este componente consome dados do VehiclesContext e apresenta os veículos
 * em um layout organizado por marcas, com opções de customização.
 * 
 * Exemplo de uso:
 * 
 * ```tsx
 * <VehicleList showPrice={true} columns={4} />
 * ```
 */
export const VehicleList: React.FC<VehicleListProps> = ({ 
  showPrice = true, 
  columns = 3 
}) => {
  const { groupedVehicles, loading, error } = useVehicles();

  if (loading) return <Loading>Carregando veículos...</Loading>;
  if (error) return <Error>{error}</Error>;

  return (
    <Container>
      {Object.entries(groupedVehicles).map(([brand, vehicles]) => (
        <BrandSection key={brand}>
          <BrandTitle>{brand}</BrandTitle>
          <VehiclesGrid style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {vehicles.map(vehicle => (
              <VehicleCard key={`${vehicle.marca}-${vehicle.modelo}-${vehicle.id}`}>
                <VehicleModel>{vehicle.modelo}</VehicleModel>
                <VehicleDetail>Ano: {vehicle.ano}</VehicleDetail>
                <VehicleDetail>Combustível: {vehicle.combustivel}</VehicleDetail>
                <VehicleDetail>Portas: {vehicle.portas}</VehicleDetail>
                <VehicleDetail>Cor: {vehicle.cor}</VehicleDetail>
                {showPrice && (
                  <Price>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(vehicle.valor)}
                  </Price>
                )}
              </VehicleCard>
            ))}
          </VehiclesGrid>
        </BrandSection>
      ))}
    </Container>
  );
};