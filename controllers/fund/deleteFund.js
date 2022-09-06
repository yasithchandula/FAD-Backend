const Fund = require("../../models/fund.model");

const deleteFund = async (req, res) => {
    try {
        const fundID = req.params.id;

        await Fund.findByIdAndDelete(fundID)
            .then(() => {
                res.status(200).send({
                    msg: "Fund succesfully deleted.",
                });
            }).catch((err) => {
                res.status(500).send({
                    msg: "Error with removing the fund.",
                    error: err,
                });
            }
            );
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    deleteFund,
};