const jwt = require("jsonwebtoken")
const userModel = require("../database/models/user.model")
const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace('bearer ', "")
        const d_token = jwt.verify(token, process.env.JWTKEY)
        const user = await userModel.findOne({ _id: d_token._id, 'tokens.token': token })
        if (!user) throw new Error("Invalid User")
        if (user.role != true) throw new Error("Not Allowed")
        req.user = user
        req.token = token
        next()
    }
    catch (e) {
        res.send({ apiStatus: false, date: e.message, message: "Not Authorized" })
    }
}
module.exports = auth