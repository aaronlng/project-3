const exports = (module.exports = {});

exports.signup = function(req, res) {
  res.send({ msg: "congrats you are signed up!" });
};
