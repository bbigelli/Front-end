import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useVehicles } from '../contexts/VehiclesContext';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const FormTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const ErrorMessage = styled.span`
  color: #d9534f;
  font-size: 14px;
  margin-top: 5px;
  display: block;
`;

const SubmitButton = styled.button`
  background-color: #5cb85c;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: #4cae4c;
  }
`;

const SuccessMessage = styled.div`
  background-color: #dff0d8;
  color: #3c763d;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
`;

type FormData = {
  marca: string;
  modelo: string;
  ano: number;
  combustivel: string;
  portas: number;
  cor: string;
  valor: number;
};

export const AddVehicle: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const { addVehicle, brands, refreshVehicles } = useVehicles();
  const [success, setSuccess] = React.useState(false);
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  const onSubmit = async (data: FormData) => {
    try {
      await addVehicle(data);
      setSuccess(true);
      reset();
      setTimeout(() => {
        setSuccess(false);
        refreshVehicles();
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error adding vehicle:', error);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Adicionar Novo Veículo</FormTitle>
      
      {success && (
        <SuccessMessage>Veículo cadastrado com sucesso! Redirecionando...</SuccessMessage>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="marca">Marca *</Label>
          <Select
            id="marca"
            {...register('marca', { required: 'Marca é obrigatória' })}
          >
            <option value="">Selecione uma marca</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </Select>
          {errors.marca && <ErrorMessage>{errors.marca.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="modelo">Modelo *</Label>
          <Input
            id="modelo"
            type="text"
            {...register('modelo', { 
              required: 'Modelo é obrigatório',
              minLength: {
                value: 2,
                message: 'Modelo deve ter pelo menos 2 caracteres'
              }
            })}
          />
          {errors.modelo && <ErrorMessage>{errors.modelo.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="ano">Ano *</Label>
          <Input
            id="ano"
            type="number"
            min="1900"
            max={currentYear}
            {...register('ano', { 
              required: 'Ano é obrigatório',
              min: {
                value: 1900,
                message: `Ano deve ser entre 1900 e ${currentYear}`
              },
              max: {
                value: currentYear,
                message: `Ano deve ser entre 1900 e ${currentYear}`
              }
            })}
          />
          {errors.ano && <ErrorMessage>{errors.ano.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="combustivel">Combustível *</Label>
          <Select
            id="combustivel"
            {...register('combustivel', { required: 'Combustível é obrigatório' })}
          >
            <option value="">Selecione um tipo</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Álcool">Álcool</option>
            <option value="Diesel">Diesel</option>
            <option value="Flex">Flex</option>
            <option value="Elétrico">Elétrico</option>
            <option value="Híbrido">Híbrido</option>
          </Select>
          {errors.combustivel && <ErrorMessage>{errors.combustivel.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="portas">Número de Portas *</Label>
          <Select
            id="portas"
            {...register('portas', { required: 'Número de portas é obrigatório' })}
          >
            <option value="">Selecione</option>
            <option value="2">2 Portas</option>
            <option value="4">4 Portas</option>
          </Select>
          {errors.portas && <ErrorMessage>{errors.portas.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="cor">Cor *</Label>
          <Input
            id="cor"
            type="text"
            {...register('cor', { required: 'Cor é obrigatória' })}
          />
          {errors.cor && <ErrorMessage>{errors.cor.message}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="valor">Valor (R$) *</Label>
          <Input
            id="valor"
            type="number"
            step="0.01"
            min="0"
            {...register('valor', { 
              required: 'Valor é obrigatório',
              min: {
                value: 0,
                message: 'Valor deve ser positivo'
              }
            })}
          />
          {errors.valor && <ErrorMessage>{errors.valor.message}</ErrorMessage>}
        </FormGroup>

        <SubmitButton type="submit">Cadastrar Veículo</SubmitButton>
      </form>
    </FormContainer>
  );
};