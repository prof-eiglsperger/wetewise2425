/**
 * Location.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: { type: 'string', columnType: 'varchar(25)', required: true },
    description: { type: 'string', columnType: 'varchar(80)' },
    categories: {
      collection: "category",
      via: 'location'
    }
  },

};

