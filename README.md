# Alarcan Finance — Tela de Visão Geral

Tela do projeto Fintech **Alarcan Finance**, desenvolvida como atividade da **Fase 4 da FIAP** ("View"). Recria, em **HTML + CSS + Tailwind CSS**, a tela de Visão Geral originalmente desenhada na Fase 2.

> *"Quem vê interface, vê coração."*

---

## Sobre a tela

A **Visão Geral** é o painel principal do Alarcan Finance, um sistema de finanças pessoais com tema escuro. Nela o usuário acompanha:

- Saldo disponível, entradas e saídas do mês
- Transações recentes classificadas por tipo (receita/despesa)
- Meta do mês com barra de progresso
- Distribuição de gastos por categoria
- Próxima cobrança agendada

---

## Tecnologias

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Estrutura semântica (`index.html`) |
| **Tailwind CSS** | Framework utilitário — layout e estilização |
| **CSS3** | Folha compilada pelo Tailwind (`css/styles.css`) |
| **Lucide Icons** | Ícones da interface |
| **Google Fonts (Inter)** | Tipografia |

---

## Responsividade

Construída com a abordagem **Mobile First** do Tailwind, usando os breakpoints `sm`, `md`, `lg` e `xl`:

- **Mobile (< 640px):** sidebar oculta, cards e tabela empilhados em coluna única
- **Tablet (640px – 1280px):** cards em 2-3 colunas, coluna lateral reorganizada
- **Desktop (≥ 1280px):** layout completo com sidebar fixa e grid principal de 2 colunas

---

## Como executar

Não é necessária instalação. Basta abrir o arquivo **`index.html`** no navegador (duplo clique).

O CSS do Tailwind já está **compilado localmente** em `css/styles.css`, então o layout funciona **mesmo sem internet**.

### Para recompilar o Tailwind (opcional, para desenvolvimento)

```bash
npm install
npx tailwindcss -i ./src/input.css -o ./css/styles.css --watch
```

---

## Estrutura

```
alarcan-finance/
├── index.html          → Estrutura da página (classes Tailwind)
├── css/
│   └── styles.css      → CSS gerado pelo Tailwind
├── src/
│   └── input.css       → Arquivo de entrada do Tailwind
├── tailwind.config.js  → Configuração (cores da identidade visual)
├── package.json        → Dependências do projeto
└── README.md           → Este arquivo
```

---

## Autor

**Renato Vieira Filho** — RM570645
FIAP · Fase 4 · 2026
