const router = require("express").Router();
const Movies = require("../models/movies.model");
/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

/*GET MOVIES*/
router.get("/movies", (req, res, next) => {
  Movies.find()

    .then((response) => {
      // console.log(response)
      res.render("movies.hbs", { response });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/movies/:id", (req, res, next) => {
  Movies.findById(req.params.id)
    .then((response) => {
      // console.log(response)
      res.render("movies-details.hbs", { response });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
