module.exports = function(sequelize, DataTypes) {
  const Comments = sequelize.define("comments", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Comments.associate = function(models) {
    Comments.belongsTo(models.post, {
      forgienKey: {
        allowNull: true
      }
    });
  };

  return Comments;
};
