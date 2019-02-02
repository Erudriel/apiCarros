Tecnologias
  Angular 7
  LoopBack 3
  MySQL

Instalação
  api_carros
  npm install

Altere datasources.json para suas credenciais:

"mysql": {
    "host": "SEU HOST",
    "port": "SUA PORTA",
    "url": "",
    "database": "api_carros",
    "password": SUA SENHA,
    "name": "mysql",
    "user": "SEU USERNAME",
    "connector": "mysql",
    "createDatabase": true
  }

SERVER (dentro de api_carros)
  node server/migrate.js
  node .

Acessar api em http://localhost:3000

CLIENT (dentro de api_carros)
  cd client
  npm install
  ng serve

Acessar client em http://localhost:4200

