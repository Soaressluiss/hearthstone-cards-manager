# 🃏 Hearthstone Cards Manager

Aplicação web desenvolvida como **desafio técnico para processo seletivo**, inspirada no universo de [**Hearthstone**](https://hearthstone.blizzard.com/).

O projeto consiste em um gerenciador de cartas que permite criar, editar, excluir e consultar registros, seguindo regras específicas de atributos, tipos e classes.

## 🎯 Contexto do desafio

Este projeto foi desenvolvido como parte de um **teste técnico para vaga de Front-end**, com o objetivo de avaliar:

- Organização e estrutura do código
- Manipulação de estado
- Implementação de CRUD completo
- Validação de dados
- Experiência do usuário

A proposta era simular um sistema de gerenciamento de cartas com regras semelhantes às do jogo.

## 🚀 Deploy

🔗 **Acesse o projeto online:**
[https://hearthstone-cards-manager.vercel.app/](https://hearthstone-cards-manager.vercel.app/)

## 📖 Sobre a solução

Para resolver o desafio, desenvolvi uma aplicação front-end completa que permite o gerenciamento dinâmico de cartas.

A solução inclui:

- Criação e edição com validação de dados
- Filtros para facilitar a busca
- Persistência local para simular armazenamento
- Interface responsiva e com feedback visual

Busquei não apenas atender aos requisitos, mas também entregar uma experiência fluida e bem estruturada.

## ⚙️ Funcionalidades implementadas

### ✅ CRUD completo

- Criar cartas
- Editar cartas
- Excluir cartas
- Listar cartas

### 🔍 Filtros

- Por ID
- Por nome
- Por classe
- Por tipo

### 💾 Persistência

- Armazenamento utilizando LocalStorage

## ✨ Diferenciais aplicados

Mesmo sendo um desafio técnico, optei por ir além do básico:

- 🎬 Animações com Motion para melhorar a experiência
- 🚀 Tela de onboarding/loading
- 🎨 Interface moderna com TailwindCSS
- 🔔 Feedback com toasts (Sonner)
- 🧠 Validação robusta com Zod + React Hook Form
- ⚡ Cuidados com performance e renderização

## 🧠 Decisões técnicas

- **React Hook Form + Zod**
  Utilizados para validação eficiente e tipada, reduzindo complexidade nos formulários.

- **Context API**
  Escolhida para centralizar o estado das cartas e evitar prop drilling.

- **LocalStorage**
  Implementado como forma de persistência, atendendo ao escopo do desafio sem necessidade de backend.

- **Componentização**
  Estruturei a aplicação em componentes reutilizáveis, pensando em manutenção e escalabilidade.

---

## ⚔️ Desafios durante o desenvolvimento

- Garantir a consistência dos dados ao editar cartas
- Manter as regras de atributos válidas em todas as operações
- Evitar re-renderizações desnecessárias na listagem
- Organizar o estado de forma simples, mas escalável

## 🔮 Possíveis melhorias

Caso o projeto evoluísse além do desafio:

- Integração com API (backend)
- Persistência em banco de dados
- Paginação da lista

## 🧪 Tecnologias utilizadas

| Tecnologia      | Versão  | Uso         |
| --------------- | ------- | ----------- |
| React           | 19.2.4  | Interface   |
| TypeScript      | 5.9.3   | Tipagem     |
| Vite            | 8.0.1   | Build       |
| TailwindCSS     | 4.2.2   | Estilização |
| React Hook Form | 7.72.0  | Formulários |
| Zod             | 4.3.6   | Validação   |
| Motion          | 12.38.0 | Animações   |

## 💻 Rodando localmente

### ✅ Pré-requisitos

Antes de começar, você precisa ter instalado:

[Node.js](https://nodejs.org/) (versão 18 ou superior)

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
