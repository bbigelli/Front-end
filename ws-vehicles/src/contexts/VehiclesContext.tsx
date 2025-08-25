import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

// Tipo para os dados da API
type ApiResponse = {
  cars: {
    id: number;
    marca_id: number;
    marca_nome: string;
    nome_modelo: string;
    ano: number;
    combustivel: string;
    num_portas: number;
    cor: string;
    valor: number;
    timestamp_cadastro: number;
  }[];
};

// Tipo para o formato interno
type Vehicle = {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  combustivel: string;
  portas: number;
  cor: string;
  valor: number;
};

type VehiclesContextData = {
  vehicles: Vehicle[];
  brands: string[];
  groupedVehicles: Record<string, Vehicle[]>;
  loading: boolean;
  error: string | null;
  addVehicle: (vehicle: Omit<Vehicle, 'id'>) => Promise<void>;
};

const VehiclesContext = createContext<VehiclesContextData>({} as VehiclesContextData);

export const VehiclesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVehicles = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Usando proxy CORS confiável
      const apiUrl = 'https://corsproxy.io/?https://wswork.com.br/cars.json';
      const response = await fetch(apiUrl);
      
      if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
      
      const data: ApiResponse = await response.json();
      console.log('Dados completos da API:', data); // Debug

      // Verifica se a propriedade cars existe e é um array
      if (!data.cars || !Array.isArray(data.cars)) {
        throw new Error('Formato de dados inválido: propriedade cars não encontrada');
      }

      // Transformação dos dados
      const transformedVehicles = data.cars.map(item => ({
        id: item.id,
        marca: item.marca_nome,
        modelo: item.nome_modelo,
        ano: item.ano,
        combustivel: item.combustivel,
        portas: item.num_portas,
        cor: item.cor,
        valor: item.valor
      }));

      console.log('Veículos transformados:', transformedVehicles); // Debug
      setVehicles(transformedVehicles);
      
    } catch (err) {
      console.error('Falha ao carregar veículos:', err);
      setError('Erro ao carregar dados. Usando dados locais...');
      
      // Fallback com dados mockados
      setVehicles([
        {
          id: 1,
          marca: "Toyota",
          modelo: "Corolla",
          ano: 2022,
          combustivel: "Flex",
          portas: 4,
          cor: "Prata",
          valor: 120000
        },
        {
          id: 2,
          marca: "Volkswagen",
          modelo: "Golf",
          ano: 2021,
          combustivel: "Gasolina",
          portas: 4,
          cor: "Vermelho",
          valor: 110000
        }
      ]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  // Gera lista de marcas únicas (ordenadas)
  const brands = [...new Set(vehicles.map(v => v.marca))].sort();

  // Agrupa veículos por marca
  const groupedVehicles = vehicles.reduce((acc, vehicle) => {
    if (!acc[vehicle.marca]) acc[vehicle.marca] = [];
    acc[vehicle.marca].push(vehicle);
    return acc;
  }, {} as Record<string, Vehicle[]>);

  const addVehicle = async (vehicle: Omit<Vehicle, 'id'>) => {
    const newVehicle = {
      ...vehicle,
      id: Math.max(0, ...vehicles.map(v => v.id)) + 1
    };
    setVehicles(prev => [...prev, newVehicle]);
  };

  return (
    <VehiclesContext.Provider value={{ 
      vehicles, 
      brands, 
      groupedVehicles, 
      loading, 
      error,
      addVehicle 
    }}>
      {children}
    </VehiclesContext.Provider>
  );
};

export const useVehicles = () => useContext(VehiclesContext);