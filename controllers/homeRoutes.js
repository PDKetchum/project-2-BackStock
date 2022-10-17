const { Location } = require("../models");

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
router.get('/locations', async (req, res) => {
    const locationData= await Location.findAll({raw: true})
   res.render('locations', {locations: locationData})
});
router.get('/backstock', (req, res) => {
    res.render('backstock')
 });


module.exports = router;
