const Donation = require("../../models/donation.model");

const acceptDonationRequest = async (req, res) => {
  const requestId = req.body.requestId;
  const donationId = req.params.id;
  const updateRequest = {
    status: "accepted",
  };
  await Request.findByIdAndUpdate(requestId, updateRequest)
    .then(() => {
      Donation.findByIdAndUpdate()
        .then(() => {
          res.json({
            message: "Donation Accepted",
          });
        })
        .catch((err) => {
          res.json({
            message: err,
          });
        });
    })
    .catch((err) => {
      res.json({
        message: err,
      });
    });
};
