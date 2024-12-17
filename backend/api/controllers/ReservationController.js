/**
 * RestrictedController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    quote: async function (req, res) {
        if (!req.session) { res.sendStatus(401); }
        if (!req.session.userId) { res.sendStatus(401); }
        let user = req.session.user;
        //  Here would be the complex logic to check for vacancy and to calculate the price
        let result = {
            "amount": 100, "currency": "EUR"
        }; 
        return res.json(result)
    },

    book: async function (req, res) {
        if (!req.session) { res.sendStatus(401); }
        if (!req.session.userId) { res.sendStatus(401); }
        let user = req.session.user;
        //  Here would be the complex logic to create a reservation in the database
        let result = "20240001"; 
        return res.json(result)
    }
};

