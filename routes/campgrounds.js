var express = require("express");
var router = express.Router({ mergeParams: true });
var Campground = require("../models/campground");
var middlewareObj = require("../middleware");
//INDEX - 
router.get("/", function (req, res) {
    //res.render("campgrounds",{campgrounds:campgrounds});
    //to populate values from the database
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", { campgrounds: allCampgrounds, currentUser: req.user });
        }
    })
});
//CREATE -  create new campground
router.post("/", middlewareObj.isLoggedIn, function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var price = req.body.price;
    var newCampgrounds = { name: name, image: image, description: desc, author: author, price: price };
    //Create a new campground and save to database
    Campground.create(newCampgrounds, function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("campgrounds");
        }
    });
});
//NEW - display the form to create new campground
router.get("/new", middlewareObj.isLoggedIn, function (req, res) {
    res.render("campgrounds/new");
});
//SHOW - show the campground
router.get("/:id", function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/show", { campground: foundCampground });
        }
    });
});


//Edit campground route

router.get("/:id/edit", middlewareObj.checkCampgroundOwnership, function (req, res) {


    Campground.findById(req.params.id, function (err, foundCampground) {
        res.render("campgrounds/edit", { campground: foundCampground });

    });

});
//Update campground route
router.put("/:id", middlewareObj.checkCampgroundOwnership, function (req, res) {
    //find and update correct campgrounds
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, updatedCampground) {
        if (err) {
            res.redirect("campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});
//Destroy campgrounds route

router.delete("/:id", middlewareObj.checkCampgroundOwnership, function (req, res) {
    Campground.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/campgrounds");
        } else {
            req.flash("success", "Comment deleted");
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;