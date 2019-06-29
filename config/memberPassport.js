//load bcrypt
const bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, member) {
  var User = member;

  // const JWTstrategy = require("passport-jwt").Strategy;
  // const ExtractJWT = require("passport-jwt").ExtractJwt;
  var LocalStrategy = require("passport-local").Strategy;

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",

        passwordField: "password",

        passReqToCallback: true
      },

      function(req, email, password, done) {
        const generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        User.findOne({
          where: {
            email: email
          }
        }).then(function(user) {
          if (user) {
            return done(null, false, {
              message: "That email is already taken"
            });
          } else {
            const userPassword = generateHash(password);

            const data = {
              email: email,

              password: userPassword,

              fullName: req.body.fullName,

              bio: req.body.bio,

              genres: req.body.genres,

              experience: req.body.experience
            };

            User.create(data).then(function(newUser, created) {
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

  passport.serializeUser(function(member, done) {
    done(null, member.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(member) {
      if (member) {
        return done(null, member.get());
      } else {
        return done(member.errors, null);
      }
    });
  });
  passport.use(
    "member-signin",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email

        usernameField: "email",

        passwordField: "password",

        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        const User = member;

        var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };

        User.findOne({
          where: {
            email: email
          }
        })
          .then(function(member) {
            if (!member) {
              return done(null, false, {
                message: "Email does not exist"
              });
            }
            console.log(member.dataValues.password);
            if (!isValidPassword(member.password, password)) {
              return done(null, false, {
                message: "Incorrect password."
              });
            }

            var userinfo = member.get();
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
  // const opts = {
  //   jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
  //   secretOrKey: "secret"
  // };

  // passport.use(
  //   "jwt",
  //   new JWTstrategy(opts, (jwt_payload, done) => {
  //     try {
  //       User.findOne({
  //         where: {
  //           id: jwt_payload.id
  //         }
  //       }).then(user => {
  //         if (user) {
  //           console.log("user found in db in passport");
  //           done(null, user);
  //         } else {
  //           console.log("user not found in db");
  //           done(null, false);
  //         }
  //       });
  //     } catch (err) {
  //       done(err);
  //     }
  //   })
  // );
};
