/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  const user = req.session.user;

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  if (user) {
    if (user.active) return next();
    return res.view('user/not_activated');
  }

  // User is not allowed
  // redirect to login page
  return res.redirect('/login');
};
