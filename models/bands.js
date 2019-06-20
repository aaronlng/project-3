module.exports = function(sequelize, DataTypes) {
  const Bands = sequelize.define("bands", {
    bandName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    bio: DataTypes.TEXT,

    //will need to json.Stringify to convert or parse it out if we are extracting
    genres: {
      type: DataTypes.STRING

      // get: function() {
      //   return JSON.parse(this.getDataValue("myArrayField"));
      // },
      // set: function(val) {
      //   return this.setDataValue("myArrayField", JSON.stringify(val));
      // }
    },

    email: DataTypes.STRING
  });

  return Bands;
};
