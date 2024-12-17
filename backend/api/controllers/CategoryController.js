/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {
    sails.log.debug("Create category....");
    let params = req.allParams();
    await Category.create(params);
    res.ok();
  },
  find: async function (req, res) {
    sails.log.debug("List all categories....");
    let categories = await Category.find();
    return res.json(categories);
  },
  findJoin: async function (req, res) {
    sails.log.debug("List all categories with join location....");
    let categories = await Category.find().populate('location');
    return res.json(categories);
  },
  findOne: async function (req, res) {
    sails.log.debug("List single category....");
    let category = await Category.findOne({ id: req.params.id }).populate('location');
    res.json(category);
  },
  destroy: async function (req, res) {
    sails.log.debug("Delete category....");
    await Category.destroy({ id: req.params.id });
    res.ok();
  },
};
