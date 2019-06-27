module.exports = function (sequelize, DataTypes) {
    const MemberMessage = sequelize.define("MemberMessage", {
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
  
    MemberMessage.associate = function (models) {
      MemberMessage.belongsTo(models.MemberChatroom, {
        foreignKey: {
          allowNull: false
        },
        onDelete: "cascade"
      })
    }
  
    return MemberMessage;
  };
  