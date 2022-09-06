const { imageUpload } = require("../../common/imageUpload");
const { sendEmail } = require("../../common/sendEmail");
const { body, validationResult } = require("express-validator");
const Donation = require("../../models/donation.model");

const createDonation = async (req, res) => {
  try {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    // const emailArray = [
    //   "akilakavinda909@gmail.com",
    //   "akilakavinda909@gmail.com",
    //   "akilakavinda909@gmail.com",
    //   "akilakavinda909@gmail.com",
    // ];
    const donationData = req.body;
    const imageBase64 = donationData.donationImage;
    const donationImage = await imageUpload(imageBase64);
    // var imageUploaded = await imageUpload(imageBase64);
    // console.log(imageUploaded);
    const { userID, donationTitle, email, contactNumber, donationDescription } =
      req.body;
    const newDonation = new Donation({
      userID,
      donationTitle,
      email,
      contactNumber,
      donationImage,
      donationDescription,
    });

    newDonation
      .save()
      .then((donation) => {
        // for (let index = 0; index < emailArray.length; index++) {
        //   sendEmail(emailArray[index], "loopTEst");
        // }
        // sendEmail(email, "Hello");
        console.log(donation);
        res.status(201).json({
          message: "Donation created successfully",
          donation: donation,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error creating donation",
          error: err,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createDonation,
};
