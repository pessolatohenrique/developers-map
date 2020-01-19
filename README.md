# Developers Map

### Sobre

Projeto desenvolvido em 3 etapas: backend, frontend e mobile. O objetivo é gerenciar e encontrar desenvolvedores na região próxima, inclusive utilizando geolocalização. Baseado na décima semana Omnistack da Rocketseat (https://rocketseat.com.br/).

### Funcionalidades
- Cadastro de desenvolvedores via backend e frontend
- Integração com a API do github
- Geolocalização de usuários cadastrados no app, em um raio de 10km do usuário conectado
- Exibição do perfil do github no app via webview

### Tecnologias

- Backend em Node.js
- Banco de dados utilizando mongodb
- Frontend com React.js
- Mobile com React Native
- Utilização de boas práticas e recursos modernos

### Executando o backend

Realizar o clone do projeto:

    git clone https://github.com/USER/developers-map.git

Acesse a pasta do backend:
    
    cd backend

Rode o comando para instalar as dependências npm:

    npm install

Inicializar o servidor node:
    
    npm run dev

A aplicação estará disponível em http://localhost:3000

### Executando o frontend

Realizar o clone do projeto:

    git clone https://github.com/USER/developers-map.git

Acesse a pasta do backend:
    
    cd front

Rode o comando para instalar as dependências npm:

    npm install

Inicializar o servidor node:
    
    npm run start

A aplicação estará disponível em http://localhost:3001 (é necessário executar em conjunto com o backend)

### Executando o mobile

Importante: É necessário ter o expo instalado na máquina de desenvolvimento, bem como o aplicativo no dispositivo móvel. Mais informações em: https://docs.expo.io/versions/latest/get-started/installation/

Realizar o clone do projeto:

    git clone https://github.com/USER/developers-map.git

Acesse a pasta do backend:
    
    cd mobile

Rode o comando para instalar as dependências npm:

    npm install

Executar o comando abaixo, e realizar a leitura do qrcode no dispositivo móvel, com o aplicativo do expo:
    
    yarn start