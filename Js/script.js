// Inicializa o mapa centralizado em São Luís - MA
const mapa = L.map("mapa").setView([-2.5298, -44.3028], 13);

// Camada base do mapa (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(mapa);

// Lista de ecopontos em São Luís
const ecopontos = [
  {
    nome: "Ecoponto Parque Amazonas",
    endereco: "Av. dos Africanos, s/nº, Bairro de Fátima",
    coord: [-2.550021653793905, -44.284370541606506],
  },
  {
    nome: "Ecoponto Angelim",
    endereco: "Rua 27, 334-452, Angelim",
    coord: [-2.5313295035882106, -44.23326644493772],
  },
  {
    nome: "Ecoponto Bequimão",
    endereco: "Av. Um, 385-531 - Bequimão",
    coord: [-2.528252339966301, -44.248183473773615],
  },
  {
    nome: "Ecoponto Habitacional Turu",
    endereco: "Travessa G, s/nº, Habitacional Turu",
    coord: [-2.54, -44.29],
  },
  {
    nome: "Ecoponto Jardim América",
    endereco: "Avenida 03, s/nº, Jardim América",
    coord: [-2.55, -44.3],
  },
  {
    nome: "Ecoponto Jardim Renascença",
    endereco: "Rua Netuno, Jardim Renascença",
    coord: [-2.56, -44.31],
  },
  {
    nome: "Ecoponto Residencial Esperança",
    endereco: "Rua Doutor Ribeiro, s/nº, Residencial Esperança",
    coord: [-2.57, -44.32],
  },
  {
    nome: "Ecoponto Cidade Operária - Unidade 101",
    endereco: "Avenida Este 203, Cidade Operária",
    coord: [-2.58, -44.33],
  },
  {
    nome: "Ecoponto São Francisco",
    endereco: "Avenida Ferreira Gullar, São Francisco",
    coord: [-2.59, -44.34],
  },
  {
    nome: "Ecoponto Anil",
    endereco: "Rua 02, Conjunto Rancho Dom Luiz, Anil",
    coord: [-2.6, -44.35],
  },
  {
    nome: "Ecoponto São Raimundo",
    endereco: "Rua 03, Quadra 50, São Raimundo",
    coord: [-2.61, -44.36],
  },
  {
    nome: "Ecoponto Cidade Operária - Unidade 205",
    endereco: "Avenida Leste 103, Cidade Operária",
    coord: [-2.62, -44.37],
  },
  {
    nome: "Ecoponto Itapiracó",
    endereco: "Avenida Joaquim Mochel, Cohatrac IV",
    coord: [-2.63, -44.38],
  },
  {
    nome: "Ecoponto Sacavém",
    endereco: "Avenida dos Africanos, Sacavém",
    coord: [-2.64, -44.39],
  },
  {
    nome: "Ecoponto Parque dos Nobres",
    endereco: "Rua dos Imperadores, Parque dos Nobres",
    coord: [-2.65, -44.4],
  },
  {
    nome: "Ecoponto Barreto",
    endereco: "Rua Cinco de Janeiro, Barreto/Ivar Saldanha",
    coord: [-2.66, -44.41],
  },
  {
    nome: "Ecoponto Primavera",
    endereco: "Avenida Contorno Sul, Residencial Primavera",
    coord: [-2.67, -44.42],
  },
  {
    nome: "Ecoponto Cohaserma",
    endereco: "Rua 14, s/nº, Cohaserma",
    coord: [-2.68, -44.43],
  },
  {
    nome: "Ecoponto Centro",
    endereco: "Avenida Senador Vitorino Freire, Anel Viário",
    coord: [-2.69, -44.44],
  },
  {
    nome: "Ecoponto Vila Isabel",
    endereco: "Avenida dos Portugueses, Vila Isabel",
    coord: [-2.7, -44.45],
  },
  {
    nome: "Ecoponto Cohab Anil",
    endereco: "Avenida Principal, Planalto Anil I",
    coord: [-2.71, -44.46],
  },
];

// Adiciona marcadores dos ecopontos no mapa
ecopontos.forEach((ponto) => {
  L.marker(ponto.coord).addTo(mapa).bindPopup(`
      <strong>${ponto.nome}</strong><br>
      ${ponto.endereco}
    `);
});
