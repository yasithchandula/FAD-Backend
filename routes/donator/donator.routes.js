const express = require("express");
const { getAllDonations } = require("../../controllers/donator/allDonations");
const { createDonation } = require("../../controllers/donator/createDonation");
const { deleteDonation } = require("../../controllers/donator/deleteDonation");
const { editDonation } = require("../../controllers/donator/editDonation");
const {
  getCompletedDonations,
  getOngoingDonations,
  getPendingDonations,
  getRejectedDonations,
} = require("../../controllers/donator/getDonations");
const getOneDonationDetails = require("../../controllers/donator/getOneDonation");
const { testBase64 } = require("../../controllers/donator/test");
const { validate } = require("../../middleware/donationValidation");

const router = express.Router();

router.post("/createDonation", validate("createDonation"), createDonation);
router.get("/getDonations", getAllDonations);
router.delete("/deleteDonation/:id", deleteDonation);
router.get("/getCompletedDonations", getCompletedDonations);
router.get("/getOngoingDonations", getOngoingDonations);
router.get("/getPendingDonations", getPendingDonations);
router.get("/getRejectedDonations", getRejectedDonations);
router.get("/getOneDonation/:id", getOneDonationDetails);
router.put("/updateDonation/:id", editDonation);

router.post("/test", testBase64);

module.exports = router;
