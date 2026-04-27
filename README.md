# 📍 CEP Finder

Aplicação web para busca de endereços a partir de CEP, consumindo a API pública do [ViaCEP](https://viacep.com.br).

🔗 **[Acesse o projeto](https://cep-finder-five.vercel.app)**

---

## Tecnologias

- [React](https://react.dev) com [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [ViaCEP API](https://viacep.com.br)

---

## Funcionalidades

- Busca de endereço por CEP em tempo real
- Validação de entrada: CEP vazio, incompleto ou inexistente
- Estado de carregamento durante a requisição
- Tratamento de erro para falhas de rede
- Interface responsiva com tema escuro

---

## Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/joaoaquino-dev/cep-finder.git

# Acesse a pasta
cd cep-finder

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em `http://localhost:5173`

---

## O que aprendi

- Consumo de API externa com `fetch` e `async/await`
- Gerenciamento de estados de UI: loading, erro e sucesso
- Tipagem de respostas de API com TypeScript
- Validação e tratamento de erros em formulários

---

Desenvolvido por [João Aquino](https://www.linkedin.com/in/joão-aquino-dev)
