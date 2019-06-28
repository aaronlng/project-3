module.exports = function(app, passport) {
  app.post("/memberSignup", passport.authenticate("local-signup"), function(
    req,
    res
  ) {
    res.json(req.user);
  });
  
  app.post(
    "/bandSignup",
    passport.authenticate("band-signup", {
      successRedirect: "/",

      failureRedirect: "/signup"
    })
  );

  app.post("/memberSignin", passport.authenticate("member-signin"), function(
    req,
    res
  ) {
    res.json(req.user);
  });

  app.get("/", isLoggedIn);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/signin");
  }
};
