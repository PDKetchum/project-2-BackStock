const withAuth = (req, res, next) => {
  // checks to see if user is  not logged in 
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  