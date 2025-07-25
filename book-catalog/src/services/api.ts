import axios from 'axios';
import { Book } from '../interfaces/Book';

// Substitua esta URL pela sua URL do crudcrud.com
const API_BASE_URL = 'https://crudcrud.com/api/72b268250c7c4c8da07ac8cc908ae7f1';

export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/livros`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const addBook = async (book: Omit<Book, '_id'>) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/livros`, book);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

export const deleteBook = async (id: string) => {
  try {
    await axios.delete(`${API_BASE_URL}/livros/${id}`);
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};

export const updateBookStatus = async (id: string, status: 'Lido' | 'Não lido') => {
  try {
    await axios.put(`${API_BASE_URL}/livros/${id}`, { status });
  } catch (error) {
    console.error('Error updating book status:', error);
    throw error;
  }
};