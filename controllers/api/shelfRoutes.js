const router = require("express").Router();
const withAuth = require("../../utils/auth");

//route to return one shelf and its data
router.get("/:id", withAuth, (req, res) => {
  Post.findAll({
    where: {
      id: req.params.id,
    },

    attributes: ["ProductID", "Stocked_By", "Amount"],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
