module.exports = function(app, passport) {
  app.post(
    "/memberSignup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/signup"
    })
  );
};
