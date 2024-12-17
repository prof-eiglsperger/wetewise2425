/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```
  if (await User.count() > 0) {
    return;
 }

  await User.createEach([
    { emailAddress: 'markus.eiglsperger@htwg-konstanz.de', fullName: 'Markus Eiglsperger', isSuperAdmin:true,
     password: await sails.helpers.passwords.hashPassword("123456"),
     },
    { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw',
      password: await sails.helpers.passwords.hashPassword("123456")},
 //   // etc.
 ]);

  if (await Location.count() > 0) {
     return;
  }
  
  await Location.createEach([
    { "name": "beach", "description": "Nice location near the beach" },
    { "name": "forest", "description": "Nice location in the forest" }
  ]);

  await Category.createEach([
    {
      "name": "Forest Edge",
      "description": "A serene pitch located at the edge of the forest, ideal for nature lovers and bird watchers.",
      "location": "2"
    },
    { 
      "name": "Sunny Meadow",
      "description": "A spacious and sunny pitch in an open meadow, perfect for families and group camping.",
      "location": "1"
    }
  ]);

};
