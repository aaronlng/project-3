module.exports = function(sequelize, DataTypes) {
  const Members = sequelize.define("members", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    fullName: {
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
    }
  });

  Members.associate = function(models) {
    Members.hasOne(models.MemberChatroom);
  };
  Members.associate = function(models) {
    Members.hasMany(models.post);
  };
  Members.associate = function(models) {
    Members.hasMany(models.comments);
  };
  Members.associate = function(models) {
    Members.belongsTo(models.bands, {
      foreignKey: {
        allowNull: true
      },
      onDelete: "cascade"
    });
  };

  return Members;
};
