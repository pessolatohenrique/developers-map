const convertStringToArray = require("../utils/convertStringToArray");
const DevModel = require("../models/Dev");

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;
    const techList = convertStringToArray(techs);

    const devs = await DevModel.find({
      techs: {
        $in: techList
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return response.json({ devs });
  }
};
