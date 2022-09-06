const { imageUpload } = require("../../common/imageUpload");
const { sendEmail } = requeire("../../common/sendEmail");

const Fund = require("../../models/fund.model");

const createFund = async (req, res) => {
    try {
        const formData = req.body;
        const imageBase64 = formData.fundImage;
        formData.fundImage = await imageUpload(imageBase64);

        const newFund = new Fund(formData);
        newFund.save()
            .then(fund => {
                res.status(201).json({
                    message: "Fund created successfully",
                    fund: fund
                }).catch(err => {
                    res.status(500).json({
                        message: "Error creating fund",
                        error: err
                    })
                })
            })

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createFund
}