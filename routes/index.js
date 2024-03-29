var express = require("express");
var router = express.Router();

var passport = require("passport");
var User = require("../models/user");

router.get("/", function (req, res) {
    res.render("campgrounds/landing");
});

// AUTH ROUTES
//==============================

router.get("/register", function (req, res) {
    res.render("register");
});

router.post("/register", function (req, res) {
    var newUser = new User({ username: req.body.username });
    //register is a passport.js function which can be used to register new users
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            return res.render("register", { "error": err.message });
        }
        passport.authenticate("local")(req, res, function () {
            req.flash("success", "Welcome to yelp camp " + user.username);
            res.redirect("/campgrounds");
        });
    });
})
//show login form

router.get("/login", function (req, res) {
    res.render("login");
})

router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }),
    function (req, res) {
    });

//logout route

router.get("/logout", function (req, res) {
    req.logout();
    req.flash("success", "Logged you out");
    res.redirect("campgrounds");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("/login");
    }

}

module.exports = router;