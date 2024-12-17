/**
 * LocationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        sails.log.debug("Create location....");
        let params = req.allParams();
        await Location.create(params);
        res.ok();
      },
      find: async function (req, res) {
        sails.log.debug("List all locations....");
        let locations = await Location.find();
        return res.json(locations);
      },
      findOne: async function (req, res) {
        sails.log.debug("List single location....");
        let location = await Location.findOne({ id: req.params.id });
        res.json(location);
      },
      destroy: async function (req, res) {
        sails.log.debug("Delete location....");
        await Location.destroy({ id: req.params.id });
        res.ok();
      },

};

