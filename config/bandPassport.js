//load bcrypt
var bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, bands) {
  var Band = bands;

  var LocalStrategy = require("passport-local").Strategy;

  passport.use(
    "band-signup",
    new LocalStrategy(
      {
        usernameField: "email",

        passwordField: "password",

        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        Band.findOne({
          where: {
            email: email
          }
        }).then(function(user) {
          if (user) {
            return done(null, false, {
              message: "That email is already taken"
            });
          } else {
            var userPassword = generateHash(password);

            var data = {
              email: email,

              password: userPassword,

              bandName: req.body.bandName,

              bio: req.body.bio,

              genres: req.body.genres,

              lookingFor: req.body.lookingFor
            };

            Band.create(data).then(function(newUser, created) {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );
  passport.serializeUser(function(bands, done) {
    done(null, bands.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(bands) {
      if (bands) {
        return done(null, bands.get());
      } else {
        return done(bands.errors, null);
      }
    });
  });
  passport.use(
    "band-signin",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email

        usernameField: "email",

        passwordField: "password",

        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        const User = bands;

        var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };

        User.findOne({
          where: {
            email: email
          }
        })
          .then(function(bands) {
            if (!bands) {
              return done(null, false, {
                message: "Email does not exist"
              });
            }

            if (!isValidPassword(bands.password, password)) {
              return done(null, false, {
                message: "Incorrect password."
              });
            }

            var userinfo = bands.get();
            return done(null, userinfo);
          })
          .catch(function(err) {
            console.log("Error:", err);

            return done(null, false, {
              message: "Something went wrong with your Signin"
            });
          });
      }
    )
  );
};
