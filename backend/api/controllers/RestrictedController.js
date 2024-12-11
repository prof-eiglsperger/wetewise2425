/**
 * RestrictedController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    example: async function (req, res) {
        if (!req.session) { res.sendStatus(401); }
        if (!req.session.userId) { res.sendStatus(401); }
        let user = req.session.user;

        res.json({message: "Hello "+user.fullName+".This message is protected!"})
    }
};

