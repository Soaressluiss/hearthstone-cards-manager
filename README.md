# 🃏 Hearthstone Cards Manager

Aplicação web para gerenciamento de cartas inspiradas no universo de [**Hearthstone**](https://hearthstone.blizzard.com/).
Permite criar, editar, excluir e consultar cartas com base em diferentes critérios, seguindo regras específicas do jogo.

## 🎯 Objetivo

Desenvolver uma aplicação Front-end para gerenciamento de cartas de um baralho, respeitando regras de atributos, tipos e classes, com persistência de dados no navegador por meio de LocalStorage.

O projeto é inspirado no jogo oficial [**Hearthstone**](https://hearthstone.blizzard.com/) e tem como objetivo reproduzir, de forma simplificada, a lógica de criação, edição e consulta de cartas.

A aplicação foi desenvolvida seguindo boas práticas de Front-end, com foco em organização de código, tipagem com TypeScript e validação de dados.

## 🚀 Deploy

🔗 **Acesse o projeto online:** [Hearthstone Cards Manager🃏](https://hearthstone-cards-manager.vercel.app/)

## 📖 Descrição

O **Hearthstone Cards Manager** permite que o usuário gerencie cartas de forma dinâmica, simulando regras básicas do jogo:

- Criação de cartas com atributos personalizados
- Organização por classes e tipos
- Controle de valores como ataque, defesa e custo de mana
- Persistência dos dados diretamente no navegador

O foco principal é entregar uma aplicação moderna, fluida e com ótima experiência de uso.

## ⚙️ Funcionalidades

### ✅ CRUD Completo

- Criar cartas
- Editar cartas
- Excluir cartas
- Listar cartas

### 🔍 Filtros

- Por ID
- Por Nome
- Por Classe
- Por Tipo

### 💾 Persistência

- Armazenamento com LocalStorage

## ✨ Diferenciais

- 🎬 Animações com Motion
- 🚀 Tela de onboarding/loading
- 🎨 UI moderna com TailwindCSS
- 🔔 Feedback com toasts (Sonner)
- 🧠 Validação com Zod + React Hook Form
- ⚡ Performance otimizada

## 🧪 Tecnologias utilizadas

| Tecnologia      | Versão  | Usada para  |
| --------------- | ------- | ----------- |
| React           | 19.2.4  | Interface   |
| TypeScript      | 5.9.3   | Tipagem     |
| Vite            | 8.0.1   | Build       |
| TailwindCSS     | 4.2.2   | Estilização |
| React Hook Form | 7.72.0  | Formulários |
| Zod             | 4.3.6   | Validação   |
| Motion          | 12.38.0 | Animações   |

---

## 💻 Inicie localmente

### ✅ Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)

- Gerenciador de pacotes:
  - npm (já vem com Node) ou
  - yarn / pnpm

### ⚙️ Passo a passo

#### 1. Clone o repositório

```bash
git clone https://github.com/Soaressluiss/hearthstone-cards-manager.git
```

#### 2. Acesse a pasta do projeto

```bash
cd hearthstone-cards-manager
```

#### 3. Instale as dependências

```bash
npm install
```

#### 4. Rode o projeto

```bash
npm run dev
```

#### 5. Acesse no navegador

```bash
http://localhost:5173
```
