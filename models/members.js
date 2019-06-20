module.exports = function(sequelize, DataTypes) {
  const Members = sequelize.define("members", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

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

    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });
  return Members;
};
