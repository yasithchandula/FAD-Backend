const Donation = require("../../models/donation.model");

const getAllDonations = (req, res) => {
  try {
    Donation.find()
      .then((donations) => {
        res.json(donations);
      })
      .catch((err) => {
        res.status(500).send({
          msg: "Error fetching data",
          error: err,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllDonations,
};
