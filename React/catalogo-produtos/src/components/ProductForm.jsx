import React, { useState } from 'react'

const ProductForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    nome: '',
    preco: '',
    descricao: '',
    imagem: ''
  })
  
  const [erros, setErros] = useState({})
  const [mostrarModal, setMostrarModal] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    if (erros[name]) {
      setErros({
        ...erros,
        [name]: null
      })
    }
  }

  const validarForm = () => {
    const novosErros = {}
    
    if (!formData.nome.trim()) {
      novosErros.nome = "Nome é obrigatório"
    }
    
    if (!formData.preco || isNaN(formData.preco) || parseFloat(formData.preco) <= 0) {
      novosErros.preco = "Preço inválido"
    }
    
    if (!formData.descricao.trim()) {
      novosErros.descricao = "Descrição é obrigatória"
    }
    
    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validarForm()) {
      return
    }
    
    const novoProduto = {
      id: Date.now(),
      nome: formData.nome,
      preco: parseFloat(formData.preco),
      descricao: formData.descricao,
      imagem: formData.imagem || 'https://via.placeholder.com/300'
    }
    
    onAddProduct(novoProduto)
    setMostrarModal(true)
    setFormData({
      nome: '',
      preco: '',
      descricao: '',
      imagem: ''
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="product-form">
        <h2>Adicionar Novo Produto</h2>
        
        <div className={`form-group ${erros.nome ? 'error' : ''}`}>
          <label>Nome*:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
          {erros.nome && <span className="error-message">{erros.nome}</span>}
        </div>
        
        <div className={`form-group ${erros.preco ? 'error' : ''}`}>
          <label>Preço* (R$):</label>
          <input
            type="number"
            name="preco"
            step="0.01"
            min="0.01"
            value={formData.preco}
            onChange={handleChange}
          />
          {erros.preco && <span className="error-message">{erros.preco}</span>}
        </div>
        
        <div className={`form-group ${erros.descricao ? 'error' : ''}`}>
          <label>Descrição*:</label>
          <textarea
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            rows="4"
          />
          {erros.descricao && <span className="error-message">{erros.descricao}</span>}
        </div>
        
        <div className="form-group">
          <label>URL da Imagem:</label>
          <input
            type="text"
            name="imagem"
            value={formData.imagem}
            onChange={handleChange}
            placeholder="Deixe vazio para imagem padrão"
          />
        </div>
        
        <button type="submit" className="btn-submit">
          Adicionar Produto
        </button>
      </form>

      {mostrarModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Produto adicionado com sucesso!</h3>
            <p>Seu produto foi cadastrado no catálogo.</p>
            <button onClick={() => setMostrarModal(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductForm