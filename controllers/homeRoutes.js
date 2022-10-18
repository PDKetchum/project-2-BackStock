const sequelize = require("../config/connection");
const { Location, Product, User, Shelf } = require("../models");
const withAuth = require("../utils/auth");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("landingpage");
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
    if (req.session.loggedIn) {
        res.redirect('/homepage');
        return;
    }
    res.render('login');
});
router.get('/locations', withAuth, async (req, res) => {
    const locationData = await Location.findAll({ raw: true })
    res.render('locations', { locations: locationData })
});
router.get('/backstock', withAuth, (req, res) => {
    res.render('backstock')
});
router.get('/homepage', withAuth, (req, res) => {
    res.render('homepage')
});

router.get('/backstock/:id', async (req, res) => {

    try {
        const driverData = await Shelf.findByPk(req.params.id, {
            where: {
                location_id: req.params.id , 
            },
            include: [Product, User, ],
        
           
    
        });
      driverData.location_id

        if (!driverData) {
            res.status(404).json({ message: 'No table found with that ID!' });
            return;
        }

        res.status(200).json(driverData);
        
    } catch (err) {
        res.status(500).json(err);
    }
    res.render('backstock')
});


module.exports = router;
