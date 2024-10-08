async function userLogout(req, res) {
    try {
        res.clearCookie("token")

        res.json({
            message: "User logged out successfully",
            error : false,
            success: true,  // assuming success is true if no error
            data : []
        })
    } catch (err) {
        res.json({
            message:err.message || err  ,
            error : true,
            success: false,
        })
    }
}

module.exports = userLogout