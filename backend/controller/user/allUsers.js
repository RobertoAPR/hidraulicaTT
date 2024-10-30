const userModel = require('../../models/userModel')

async function allUsers(req, res) {
    
    try{
        console.log('Users id all', req.userId)

        const allUsers = await userModel.find()  // assuming User is a model for user collectio

        res.json({
            message : "All user",
            data : allUsers,
            error : false,
            success: true,  // assuming success is true if no error
        })
    }catch(err){
        res.status(400).json({
            message:err.message || err,
            error : true,
            success: false,
        })
    }

}
module.exports = allUsers