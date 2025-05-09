# 🌦️ Aplicativo de Previsão do Tempo com React e OpenWeatherMap

Aplicativo web construído com React que permite ao usuário buscar cidades e visualizar informações climáticas em tempo real, incluindo temperatura, velocidade do vento, umidade e localização no mapa utilizando.

## 🔗 Acesse o projeto online

👉 [Clique aqui para ver o app no ar](https://previsao-do-tempo-orcin-ten.vercel.app)  

## 🔧 Tecnologias

- React
- Axios
- OpenWeatherMap API
- React Leaflet / Leaflet
- React Icons
- Vite
- CSS Modules

## 🚀 Funcionalidades

- Busca por cidade
- Exibição de temperatura, pressão, umidade
- Mapa interativo com marcador da cidade buscada
- Tratamento de erros (ex: cidade inválida)
- Layout responsivo e estilização modular

## 🛠️ Instalação local

```bash
# Clone o repositório
git clone https://github.com/ezequielhenrique/previsao-do-tempo
cd weather-app

# Instale as dependências
npm install

# Crie o arquivo .env com sua chave da API
echo "VITE_OPENWEATHER_API_KEY=sua_chave_aqui" > .env

# Inicie o servidor de desenvolvimento
npm run dev
