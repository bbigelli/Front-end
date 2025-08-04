
export interface Destino {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
  precoMedio: number;
  clima: string;
}

export const destinos: Destino[] = [
  {
    id: 1,
    nome: "Rio de Janeiro",
    imagem: "/rio.jpg",
    descricao: "Cidade maravilhosa com praias incríveis e o famoso Cristo Redentor.",
    precoMedio: 2500,
    clima: "Tropical"
  },
  {
    id: 2,
    nome: "Fernando de Noronha",
    imagem: "/noronha.jpg",
    descricao: "Paraíso ecológico com praias de águas cristalinas e vida marinha abundante.",
    precoMedio: 5000,
    clima: "Tropical"
  },
  {
    id: 3,
    nome: "Gramado",
    imagem: "/gramado.jpg",
    descricao: "Cidade serrana com arquitetura europeia e clima frio, ideal para o inverno.",
    precoMedio: 3200,
    clima: "Subtropical"
  },
  {
    id: 4,
    nome: "Bonito",
    imagem: "/bonito.jpg",
    descricao: "Destino perfeito para ecoturismo com rios de águas transparentes e cavernas.",
    precoMedio: 2800,
    clima: "Tropical"
  }
];