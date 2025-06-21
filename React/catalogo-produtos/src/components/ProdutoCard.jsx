import React from 'react'

const ProdutoCard = ({ id, nome, preco, imagem, descricao, onRemove }) => {
  return (
    <div className="produto-card">
      <img 
        src={imagem || 'https://via.placeholder.com/300'} 
        alt={nome} 
        className="produto-imagem"
      />
      <div className="produto-info">
        <h3>{nome}</h3>
        <p className="preco">R$ {preco.toFixed(2)}</p>
        <p className="descricao">{descricao}</p>
        <button 
          onClick={() => onRemove(id)} 
          className="btn-remover"
        >
          Remover
        </button>
      </div>
    </div>
  )
}

export default ProdutoCard