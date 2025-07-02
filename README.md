# ✂️ FSW Barber

FSW Barber é uma plataforma web de agendamento online que conecta clientes a barbearias, permitindo reservar serviços de forma rápida, intuitiva e responsiva.

## 🚀 Tecnologias Utilizadas

- **Next.js com TypeScript** — Framework React para desenvolvimento fullstack e Server-Side Rendering.
- **Prisma ORM** — Gerenciamento e integração com banco de dados PostgreSQL.
- **Tailwind CSS** — Estilização moderna e responsiva com utilitários.
- **Shadcn UI** — Componentes acessíveis e elegantes prontos para uso.

## ✨ Funcionalidades

✅ Cadastro e autenticação de usuários com NextAuth
✅ Listagem de barbearias com serviços disponíveis  
✅ Visualização de detalhes e avaliações  
✅ Agendamento de horários online  
✅ Interface totalmente responsiva  
✅ Painel administrativo simplificado (opcional)

## 📂 Estrutura do Projeto

```
fsw-barber/
├── app/              # Rotas e páginas Next.js
├── components/       # Componentes reutilizáveis
├── lib/              # Helpers e configurações do Prisma
├── prisma/           # Schema do banco de dados
├── public/           # Arquivos estáticos
├── styles/           # Estilos globais
└── ...
```

## ⚙️ Como Rodar Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/fsw-barber.git
   cd fsw-barber
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure o banco de dados:**

   Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias:

   ```
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/fswbarber"
   NEXTAUTH_SECRET="suachavesecreta"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Execute as migrações do Prisma:**

   ```bash
   npx prisma migrate dev
   ```

5. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

6. **Acesse no navegador:**

   ```
   http://localhost:3000
   ```
