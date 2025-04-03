# Node Express JWT Auth API

## Descrição
Esta é uma API de autenticação baseada em Node.js e Express, utilizando JWT para autenticação de usuários. A API permite:
- Registro de usuários
- Autenticação via JWT
- Acesso restrito a rotas protegidas
- Persistência dos usuários em um banco de dados relacional com Sequelize

## Tecnologias Utilizadas
- Node.js
- Express
- Sequelize
- SQLite (pode ser alterado para outros bancos de dados facilmente)
- Passport.js
- JWT (JSON Web Token)
- Bcrypt
- Dotenv

## Configuração

### 1. Clonar o repositório
```sh
 git clone <url_do_repositorio>
 cd node-express-jwt-auth
```

### 2. Instalar dependências
```sh
 npm install
```

### 3. Configurar variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e adicione as configurações:
```ini
PORT=3000
SECRET_KEY=asdfghjkl
SALT_ROUNDS=10
DB_DIALECT=sqlite
DB_STORAGE=./database.sqlite
```

### 4. Iniciar a API
```sh
 npm start
```

A API estará disponível em `http://localhost:3000`.

## Endpoints

### 1. Registro de Usuário
```http
POST /register
```
**Body:**
```json
{
    "username": "admin",
    "password": "1234"
}
```
**Resposta:**
```json
{
    "message": "User created successfully",
    "user": {
        "id": 1,
        "username": "admin",
        "createdAt": "2025-04-03T14:29:41.700Z",
        "updatedAt": "2025-04-03T14:29:41.700Z"
    }
}
```

### 2. Login
```http
POST /login
```
**Body:**
```json
{
    "username": "admin",
    "password": "1234"
}
```
**Resposta:**
```json
{
    "token": "<JWT_TOKEN>"
}
```

### 3. Rota Pública (/ping)
```http
GET /ping
```
**Resposta:**
```json
{
    "message": "pong"
}
```

## Considerações
- A API está configurada para SQLite por padrão, mas pode ser alterada para MySQL ou PostgreSQL modificando as variáveis no `.env`.
- O banco de dados é sincronizado automaticamente ao iniciar a aplicação.
- O escopo padrão do Sequelize impede que a senha seja retornada nas respostas da API.

## Autor
- Rafael Valentim 🚀