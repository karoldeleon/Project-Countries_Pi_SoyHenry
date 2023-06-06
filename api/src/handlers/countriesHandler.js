const { Op } = require("sequelize");
const { Country, Activity } = require("../db");

const getCountriesHandler = async (req, res) => {
  const { id } = req.params;
  const { name } = req.query;

  try {
    if (id) {
      const country = await Country.findByPk(id, {
        include: Activity,
      });
      if (country) {
        return res.status(200).json(country);
      } else {
        return res.status(404).json({ message: "País no encontrado" });
      }
    }

    let dataBaseCountries;
    if (!name) {
      dataBaseCountries = await Country.findAll(
        {
        include: Activity,
        }
      );
    } else {
      dataBaseCountries = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
    }
    return res.status(200).json(dataBaseCountries);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCountriesHandler;