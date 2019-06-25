module.exports = function (sequelize, DataTypes) {
  const Message = sequelize.define("Message", {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Message.associate = function (models) {
    Message.belongsTo(models.Chatroom, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    })
  }

  return Message;
};
