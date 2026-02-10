# 📚 Livraria Coruja

Sistema de gerenciamento de livraria desenvolvido em TypeScript, com suporte a livros físicos e digitais.

---

## 📋 Sobre o Projeto

A **Livraria Coruja** é um sistema de cadastro e gerenciamento de produtos para uma livraria, desenvolvido como projeto final para o bloco 01 do Bootcamp Generation. 
O sistema permite cadastrar, listar, atualizar, deletar e buscar livros físicos e digitais por meio de um menu interativo no terminal.

---

## ✨ Funcionalidades

- **Listar todos os produtos** — exibe todos os livros cadastrados no sistema
- **Listar produto por ID** — busca e exibe um produto específico pelo seu identificador
- **Cadastrar produto** — permite adicionar um novo livro físico ou digital ao sistema
- **Atualizar produto** — edita os dados de um produto já cadastrado (mantendo valores anteriores ao pressionar ENTER)
- **Deletar produto** — remove um produto do sistema pelo ID
- **Buscar por gênero** — filtra e exibe os produtos de um gênero literário específico

---

## 🗂️ Estrutura de Pastas

```
📦 livraria-coruja
├── 📄 Menu.ts                        # Menu principal e funções de interação com o usuário
│
├── 📁 src
│   ├── 📁 model
│   │   ├── 📄 Produto.ts             # Classe abstrata base para os produtos
│   │   ├── 📄 LivroFisico.ts         # Classe para livros físicos (páginas e estoque)
│   │   └── 📄 LivroDigital.ts        # Classe para livros digitais (tamanho em MB e formato)
│   │
│   ├── 📁 controller
│   │   └── 📄 ProdutoController.ts   # Lógica de negócio e operações CRUD
│   │
│   ├── 📁 repository
│   │   └── 📄 ProdutoRepository.ts   # Interface que define os métodos do controller
│   │
│   └── 📁 util
│       ├── 📄 Colors.ts              # Utilitário para cores no terminal
│       └── 📄 Input.ts               # Utilitário para leitura de dados do usuário
```

---

## 🛠️ Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)


---

## 

Desenvolvido por **Clarisse Rodrigues**

[![GitHub](https://img.shields.io/badge/GitHub-clarodriguess-181717?style=flat&logo=github)](https://github.com/clarodriguess)
[![Gmail](https://img.shields.io/badge/Gmail-clarissebleasby@gmail.com-D14836?style=flat&logo=gmail&logoColor=white)](mailto:clarissebleasby@gmail.com)
