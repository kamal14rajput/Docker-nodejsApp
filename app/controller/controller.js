module.exports = {
    messageController(req, res) {

        let response = {
            success: true,
            message: "Hello India!!!"
        }

        res.status(200).send(response)
    }
}