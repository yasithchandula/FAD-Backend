const Donation = require("../../models/donation.model");

const getCompletedDonations = async (req, res) => {
  await Donation.find({ status: "completed" })
    .then((donations) => {
      res.json(donations);
    })
    .catch((err) => {
      res.json({
        errror: err,
      });
    });
};

const getOngoingDonations = async (req, res) => {
  await Donation.find({ status: "active" })
    .then((donations) => {
      res.json(donations);
    })
    .catch((err) => {
      res.json({
        errror: err,
      });
    });
};

const getPendingDonations = async (req, res) => {
  await Donation.find({ status: "pending" })
    .then((donations) => {
      res.json(donations);
    })
    .catch((err) => {
      res.json({
        errror: err,
      });
    });
};

const getRejectedDonations = async (req, res) => {
  await Donation.find({ status: "rejected" })
    .then((donations) => {
      res.json(donations);
    })
    .catch((err) => {
      res.json({
        errror: err,
      });
    });
};

module.exports = {
  getCompletedDonations,
  getOngoingDonations,
  getPendingDonations,
  getRejectedDonations,
};
