<p align="center">
  <h3 align="center"><strong>Server - NodeJS</strong></h3>  
</p>

## Começando

Para obter uma cópia local e funcional, siga essas etapas

### Instalação

1. Clone o repositório
```sh
git clone https://github.com/kevynrocha/eagle-bank-server-challenge
```
2. Entre na pasta do projeto
```sh
cd eagle-bank-server-challenge/
```
3. Instale as dependências
```sh
yarn
```
## Utilização

1. Inicie o servidor
```sh
yarn dev
```

### POST
`http://localhost:3333/api/v1/users`

```
{
  "id": "f8cfc75a-7faf-497f-99ef-07d968129f2c",
  "name": "kevyn",
  "email": "kevynn@email.com"
}
```

`http://localhost:3333/api/v1/sessions`

```
{
  "user": {
    "id": "47b6eebe-3af5-488f-92d8-8272e7684e1f",
    "name": "Kevyn",
    "email": "kevyn@email.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3YjZlZWJlLTNhZjUtNDg4Zi05MmQ4LTgyNzJlNzY4NGUxZiIsImlhdCI6MTYwOTgxNDYzNSwiZXhwIjoxNjA5ODE0NjY1fQ.YCmWm3EvdR9Qy58s7diAi3b9Y490lApHrjG_KuEBfgw"
  }
}
```

### GET
`http://localhost:3333/api/v1/users`

```
{
  "users": [
    {
      "id": "3f0a060a-b5d9-48ec-8da3-56c801087c1c",
      "email": "kevynn@email.com"
    }
  ]
}
```

## Contato

Kevyn Rocha - kevyn_oliver@hotmail.com

