module.exports = function (sequelize, DataTypes) {
  const Members = sequelize.define("members", {
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    bio: DataTypes.TEXT,

    //will need to json.Stringify to convert or parse it out if we are extracting
    genres: DataTypes.STRING,

    experience: DataTypes.STRING,

    email: DataTypes.STRING
  });

  Members.associate = function (models) {
    Members.hasMany(models.Message), {
    }
  }

  return Members;
};
