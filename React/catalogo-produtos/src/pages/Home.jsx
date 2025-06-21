import React, { useState, useEffect } from 'react'
import ProdutoCard from '../components/ProdutoCard'
import ProductForm from '../components/ProductForm'
import Loading from './Loading'

const Home = () => {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)

  // Simula carregamento de API
  useEffect(() => {
    const timer = setTimeout(() => {
      const produtosMockados = [
        {
          id: 1,
          nome: 'Notebook Premium',
          preco: 4999.99,
          descricao: 'Notebook com processador de última geração e tela 4K.',
          imagem: 'src/assets/notebook.png'
        },
        {
          id: 2,
          nome: 'Smartphone Top',
          preco: 2999.99,
          descricao: 'Smartphone com câmera de alta resolução e bateria de longa duração.',
          imagem: 'src/assets/smartphone.jpg'
        }
      ]
      setProdutos(produtosMockados)
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleAddProduct = (novoProduto) => {
    setProdutos([...produtos, { ...novoProduto, id: produtos.length + 1 }])
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="home">
      <h1>Catálogo de Produtos</h1>
      
      <div className="produtos-container">
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            descricao={produto.descricao}
            imagem={produto.imagem}
          />
        ))}
      </div>
      
      <ProductForm onAddProduct={handleAddProduct} />
    </div>
  )
}

export default Home