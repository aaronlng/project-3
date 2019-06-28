module.exports = function(sequelize, DataTypes) {
  const Bands = sequelize.define("bands", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

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
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    // decrypter: {
    //   type: DataTypes.STRING
    // },
    // status: {
    //   type: DataTypes.ENUM("active", "inactive"),
    //   defaultValue: "active"
    // }
  });
  Bands.associate = function(models) {
    Bands.hasMany(models.post);
  };
  Bands.associate = function(models) {
    Bands.hasMany(models.comments);
  };

  Bands.associate = function(models) {
    Bands.hasOne(models.Chatroom);
  };

  Bands.associate = function(models) {
    Bands.hasMany(models.members, {
      OnDelete: "cascade"
    });
  };

  return Bands;
};
