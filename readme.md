# Projeto de Catálogo de Filmes

Este é um projeto desenvolvido durante o curso **The Ultimate React.js Course** da JavaScript Mastery. O objetivo foi criar uma aplicação completa para buscar e visualizar filmes populares, utilizando a API do The Movie Database (TMDb) e o Appwrite para gerenciamento de dados.

##  **Objetivo do Projeto**

O projeto visa criar um catálogo de filmes, permitindo ao usuário:

* Visualizar filmes populares ao carregar a aplicação.
* Realizar buscas por título de filmes.
* Visualizar detalhes dos filmes listados.

---

##  **Tecnologias Utilizadas**

* React.js
* Hooks (useState, useEffect, Custom Hooks)
* API The Movie Database (TMDb)
* Appwrite (Banco de Dados)
* TailwindCss

---

## ️ **Funcionalidades Implementadas**

* Listagem de filmes populares na página inicial.
* Busca em tempo real (com debounce para otimização).
* Separação de componentes para melhor organização do código.
* Hooks personalizados para reaproveitamento de lógica.
* Gerenciamento de estado com Hooks.

---

## 🗂 **Estrutura de Pastas**

```plaintext
src/
│
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Search.jsx
│   ├── movie/
│   │   ├── MovieCard.jsx
│   │   ├── TrendingMovieCard.jsx
│   │   └── MovieSection.jsx
│   └── tool/
│       └── Loader.jsx
│
├── hooks/
│   ├── useFetchMovies.js
│   └── useLoadTrendingMovies.js
│
├── App.jsx
└── index.css
```

---

##  **Como Executar o Projeto**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Navegue até o diretório do projeto
cd nome-do-repositorio

# Instale as dependências
npm install

# Inicie a aplicação
npm run dev
```

Acesse em: `http://localhost:5173`

---

##  **Próximos Passos**

* Adicionar paginação para listas extensas de filmes.
* Implementar sistema de favoritos utilizando o Appwrite.
* Melhorar a experiência do usuário com animações.

---
