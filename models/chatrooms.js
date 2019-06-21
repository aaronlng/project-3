module.exports = function (sequelize, DataTypes) {
    const Chatroom = sequelize.define("Chatroom", {

    });

    Chatroom.associate = function (models) {
        Chatroom.hasMany(models.Message), {
            onDelete: "cascade"
        }
        Chatroom.belongsToMany(models.members, { through: "MembersId", as: "roomId" })
    }

    return Chatroom;
};
