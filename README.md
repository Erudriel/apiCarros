INSTALAÇÃO

Primeiramente certifique-se de que seu nodejs, angular e loopback estejam atualizados nos seguintes sites:
- https://nodejs.org/en/
- https://angular.io/guide/quickstart
- https://loopback.io/

Certifique-se que o mysql está instalado e funcional em sua máquina

Em sua base rode a seguinte query(sem as aspas):

"create database api_carros;
  use api_carros;
  CREATE TABLE carro (
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

Pelo Terminal de Comando acesse o diretório onde esta a api "./apiCarros/client" e a partir de lá digite "npm install" para instalar as dependências.

Após isso no arquivo "datasource.json" certifique-se de ajustar suas credenciais do mysql.

No diretório via terminal "./apiCarros" digite "node ." sem as aspas para iniciar o loopback.

Após isso digite no diretório via terminal "./apiCarros/client" digite "ng serve --open" para iniciar o sistema.
