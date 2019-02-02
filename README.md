INSTALAÇÃO

Primeiramente certifique-se de que seu nodejs, angular e loopback estejam atualizados nos seguintes sites:
- https://nodejs.org/en/
- https://angular.io/guide/quickstart
- https://loopback.io/

Certifique-se de ter o xampp instalado para fazer a utilização do mysql no seu localhost

Inicie o xampp na página PhpMyAdmin

Crie uma nova base chamada api_carros

em sua base rode a seguinte query(sem as aspas):

"CREATE TABLE carro (
  id int PRIMARY KEY AUTO_INCREMENT,
  modelo Varchar(20) NOT NULL,
  fabricante varchar(20) NOT NULL,
  ano int(4) NOT NULL DEFAULT 2000,
  cor varchar(10) NOT NULL,
  combustivel varchar(10) NOT NULL DEFAULT 'diesel',
  foto text NOT NULL,
  linkwebmotors text NOT NULL,
  oferta boolean NOT NULL DEFAULT false,
  preco float(10,2) NOT NULL
  );"

pelo Terminal de Comando acesse o diretório onde esta a api "./apiCarros/client" e a partir de lá digite "ng serve"
sem as aspas para iniciar nosso host

em seu navegador digite "localhost:4200" sem as aspas para iniciar o acesso ao site
