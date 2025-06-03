# S2HEALTH - Landing Page Gamificada

Uma landing page emocional e gamificada para a S2HEALTH, construída com React, Next.js e Tailwind CSS.

## 🎯 Sobre o Projeto

Esta landing page foi desenvolvida para criar uma experiência emocional e envolvente, guiando o usuário através de 5 etapas cuidadosamente estruturadas para conectar com a dor do público-alvo e apresentar a solução da S2HEALTH de forma natural e empática.

## 🧱 Tech Stack

- **React** 18 com JSX funcional
- **Next.js** 14 com Turbopack
- **Tailwind CSS** com paleta personalizada
- **Framer Motion** para animações suaves
- **Componentes reutilizáveis** e bem organizados
- **Responsividade** mobile-first

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <repository-url>
cd s2health-landing

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

## 🎨 Paleta de Cores

```js
colors: {
  primary: '#2C8270',    // Verde principal
  secondary: '#8FD2B4',  // Verde claro
  surface: '#F8FCFB',    // Fundo principal
  card: '#E0F2EC',       // Cards
  text: '#1F3D38',       // Texto principal
  accent: '#D94D1A',     // Destaque/erro
  white: '#FFFFFF',      // Branco
}
```

## 📱 Estrutura da Landing Page

### Etapa 1 - Revelação + Primeira Escolha
- Apresenta o "segredo" sobre absenteísmo no trabalho
- 3 opções de resposta que definem o fluxo personalizado
- Animações de entrada suaves para criar impacto

### Etapa 2 - Resposta Emocional
- Resposta personalizada baseada na escolha do usuário
- Cria conexão emocional e validação dos sentimentos
- Transição natural para a apresentação da solução

### Etapa 3 - Apresentação da Solução
- História da origem da S2HEALTH
- Grid animado com as principais features:
  - QR Code exclusivo
  - Telemedicina 24h
  - Relatórios inteligentes para RH
  - Acesso para familiares
  - Modelo com cashback

### Etapa 4 - Formulário de Qualificação
- Formulário leve e funcional
- Validação em tempo real
- Campos: Nome, E-mail, Empresa, Número de colaboradores
- Estados de loading e feedback visual

### Etapa 5 - Agradecimento e Encerramento
- Mensagem de agradecimento emocional
- Reforça o cuidado com a equipe
- Animações sutis de conclusão

## 🛠️ Componentes

```
components/
├── LandingPage.jsx     # Componente principal com gerenciamento de estado
├── Header.jsx          # Cabeçalho com logo e indicador de progresso
├── Step1.jsx           # Revelação e primeira escolha
├── Step2.jsx           # Resposta emocional personalizada
├── Step3.jsx           # Apresentação da solução
├── Step4.jsx           # Formulário de qualificação
└── Step5.jsx           # Agradecimento final
```

## ✨ Características Especiais

### Animações
- Transições suaves entre etapas usando Framer Motion
- Animações de entrada escalonadas para criar ritmo
- Micro-interações em hover e clique
- Indicador de progresso animado

### Responsividade
- Layout mobile-first
- Breakpoints bem definidos (sm, md, lg)
- Tipografia responsiva
- Espaçamentos adaptativos

### UX/UI
- Design emocional com bastante white space
- Botões com estados hover, focus e loading
- Feedback visual para interações
- Paleta de cores consistente e acessível

### Funcionalidades
- Gerenciamento de estado reativo
- Validação de formulário em tempo real
- Navegação entre etapas com controle de fluxo
- Personalização baseada na escolha do usuário

## 🔧 Scripts Disponíveis

```bash
npm run dev        # Servidor de desenvolvimento com Turbopack
npm run build      # Build de produção
npm run start      # Servidor de produção
npm run lint       # Verificação de código
```

## 📦 Deploy

O projeto está pronto para deploy em plataformas como:
- Vercel (recomendado para Next.js)
- Netlify
- Heroku
- Qualquer provedor que suporte Node.js

## 🎨 Customização

Para personalizar a landing page:

1. **Cores**: Edite `tailwind.config.js`
2. **Conteúdo**: Os textos estão nos respectivos componentes Step
3. **Animações**: Ajuste as configurações do Framer Motion
4. **Layout**: Modifique as classes Tailwind nos componentes

## 📝 Observações Importantes

- Todos os textos foram preservados exatamente como especificado
- Nenhum conteúdo comercial adicional foi inserido
- A estrutura emocional foi mantida como um "diário guiado"
- Formulário funcional com validação, mas sem backend integrado

## 🤝 Contribuição

Para contribuir com melhorias:
1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

---

**S2HEALTH** - Cuidado que conecta 💚 