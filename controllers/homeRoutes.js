const router = require("express").Router();

router.get('/', (req, res) => {
    res.render('landingpage');
});

router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/locations');
    //     return;
    //   }
    res.render('login');
});
router.get('/locations', (req, res) => {
   res.render('locations')
});
router.get('/backstock', (req, res) => {
    res.render('backstock')
 });


module.exports = router;
