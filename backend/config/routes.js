/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  '/': { view: 'pages/homepage' },

  'POST /login': "login.login",
  'POST /register': "login.register",
  'GET /sessionUser': "login.sessionUser",
  'GET /logout': "login.logout",
  
  'POST /quote': "reservation.quote",
  'POST /book': "reservation.book",

  'POST /category': { controller: 'CategoryController', action:'create' },
  'GET /category': 'category.find',
  'GET /categoryJoin': 'category.findJoin',
  'GET /category/:id': 'category.findOne',
  'DELETE /category/:id': 'category.destroy',

  'POST /location': 'location.create',
  'GET /location': 'location.find',
  'GET /location/:id': 'location.findOne',
  'DELETE /location/:id': 'location.destroy'
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
