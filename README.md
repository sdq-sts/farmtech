# 🦠 Covidômetro - Aplicação de Monitoramento de Dados de COVID-19

[![GitHub stars](https://img.shields.io/github/stars/sdq-sts/farmtech)](https://github.com/sdq-sts/farmtech/stargazers)
[![CI](https://github.com/sdq-sts/farmtech/actions/workflows/ci.yml/badge.svg)](https://github.com/sdq-sts/farmtech/actions)

## 🖥️ Demo

A aplicação está hospedada no Railway e pode ser acessada através deste link:

**[Acesse o FarmTech/Covidômetro Online 🚀](https://farmtech.up.railway.app/)**

## 📚 Sobre o Projeto

Este projeto foi desenvolvido para cumprir um teste técnico para a empresa **Farm Investimentos**. O **Covidômetro** é uma aplicação web SPA que apresenta uma interface moderna e responsiva. Utilizando as melhores práticas de desenvolvimento frontend, a aplicação foi desenvolvida com foco em desempenho, responsividade e facilidade de manutenção.

### Principais Características:

- **Responsividade**: A aplicação se adapta a diferentes tamanhos de tela, proporcionando uma ótima experiência tanto em dispositivos móveis quanto em desktops.
- **Organização BEM**: O projeto foi estruturado utilizando a metodologia **BEM** para garantir uma organização clara e consistente dos arquivos SCSS.
- **Testes Automatizados**: O projeto possui testes unitários automatizados, que são executados automaticamente no GitHub Actions a cada commit/pull request.
- **Desenvolvimento em Vite**: Utiliza **Vite** como ferramenta de build para um desenvolvimento rápido e eficiente.
- **Hospedagem no Railway**: A aplicação está hospedada no Railway, pronta para ser acessada publicamente.

## 🚀 Funcionalidades

- **Consulta Dinâmica**: Interface dinâmica para exibir e filtrar dados.
- **Design Responsivo**: Adaptado para funcionar bem em dispositivos móveis, tablets e desktops.
- **Testes Automatizados**: Pipeline de CI/CD configurado para rodar os testes unitários automaticamente.

## 🛠️ Tecnologias Utilizadas

- **Vue 3**: Framework JavaScript progressivo para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida e moderna para desenvolvimento frontend.
- **SCSS (BEM)**: Metodologia BEM utilizada para organização dos estilos SCSS.
- **TypeScript**: Tipagem estática para maior robustez no código.
- **GitHub Actions**: Configurado para execução automatizada dos testes em cada push/pull request.
- **Railway**: Hospedagem rápida e eficiente.

## 🧑‍💻 Como Rodar Localmente

Siga os passos abaixo para clonar e rodar o projeto em sua máquina local.

### Pré-requisitos

- **Node.js** (versão 16.x ou superior)
- **NPM** (versão 8.x ou superior)

### Passos:

1. Clone o repositório:

   ```bash
   git clone https://github.com/sdq-sts/farmtech
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd farmtech
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Rode o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

A aplicação estará disponível em [http://localhost:5173/](http://localhost:5173/)

## 🧪 Rodando os Testes

Para rodar os testes unitários:

```bash
   npm run test
```

Os testes são executados automaticamente no GitHub Actions, garantindo a integridade do código.

## 📂 Estrutura do Projeto

A estrutura do projeto segue a metodologia BEM para garantir que os estilos estejam organizados de forma modular e fácil de manter.

```bash
src/
├── App.vue
├── assets
│   ├── imgs
│   │   ├── doctors.svg
│   │   └── logo.png
│   ├── main.scss
│   └── variables.scss
├── components
│   ├── SearchBar.vue
│   ├── SearchContainer.vue
│   ├── SearcherIcon.vue
│   ├── SearchResultCard.vue
│   ├── SiteHeader.vue
│   ├── SiteHero.vue
│   └── __tests__
│       ├── SearchBar.spec.ts
│       ├── SearchResultCard.spec.ts
│       ├── SiteHeader.spec.ts
│       └── SIteHero.spec.ts
├── composables
│   ├── useFetchAllRegions.ts
│   └── useFetchReportsTotal.ts
├── main.ts
├── project-structure.txt
├── router
│   └── index.ts
├── services
│   └── index.ts
├── utils
│   └── index.ts
└── views
    └── HomeView.vue
```

## 🚀 Deploy e CI/CD

O projeto está configurado para rodar testes automatizados utilizando o GitHub Actions a cada push ou pull request para a branch main. Isso garante que o código esteja sempre em conformidade com os padrões de qualidade.

- Testes Automáticos: Configurado para rodar os testes com Vitest.
- Hospedagem: Utilizei Railway para o deploy contínuo da aplicação.

## ⚠️ Limitações

Durante o desenvolvimento do Covidômetro, descobri que a API usada foi descontinuada em 10 de março de 2023. Isso limitou algumas funcionalidades que eu planejava implementar, como atualizações de dados mais recentes. Mesmo assim, a aplicação foi construída com os dados disponíveis até essa data.

### Contato

Caso tenha dúvidas ou queira entrar em contato, fique à vontade para me chamar no [LinkedIn](https://www.linkedin.com/in/sdq-sts/).
👨‍💻 Desenvolvido por [Sadraque Santos](https://github.com/sdq-sts).
