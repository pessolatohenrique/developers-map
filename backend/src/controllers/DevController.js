const axios = require("axios");
const DevModel = require("../models/Dev");
const convertStringToArray = require("../utils/convertStringToArray");

/**
 * Tipos de parâmetro:
 * - Query: request.query -> utilizado principalmente para filtros
 * - Route: request.params -> utilizado para rotas, por exemplo, atualização e exclusão de usuários
 * - Body: request.body -> envio de dados para inserção ou atualização
 */

module.exports = {
  async index(request, response) {
    const devs = await DevModel.find();
    return response.json(devs);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;
    const apiResponse = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    let dev = await DevModel.findOne({ github_username });

    if (!dev) {
      //caso o "name" não existir, preencher com valor do login
      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsList = convertStringToArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await DevModel.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs: techsList,
        location
      });
    }

    return response.json(dev);
  }
};
