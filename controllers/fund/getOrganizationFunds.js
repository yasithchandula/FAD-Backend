const Fund = require("../../models/fund.model");

const getOrganizationFunds = async (req, res) => {
    try {
        const organizationID = req.params.id;

        await Fund.find({ organizationID: organizationID })
            .then((funds) => {
                res.json(funds);
            }).catch((err) => {
                res.status(500).send({
                    msg: "Error fetching data",
                    error: err,
                });
            }
            );
    } catch (error) {
        console.log(error);
    }
}