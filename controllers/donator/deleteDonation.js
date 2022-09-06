const Donation = require("../../models/donation.model");

const deleteDonation = async (req, res) => {
  try {
    const donationID = req.params.id;

    await Donation.find({ _id: donationID }).then((donation) => {
      // const emailArray = donation.numberOfRequests;
      // for (let index = 0; index < array.length; index++) {
      //   const element = array[index];
      // }
      console.log(donation);
    });

    await Donation.findByIdAndDelete(donationID)
      .then(() => {
        res.status(200).send({
          msg: "donation succesfully deleted",
        });
      })
      .catch((err) => {
        res.status(500).send({
          msg: "error with deletion",
          error: err,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteDonation,
};
