module.exports = function (sequelize, DataTypes) {
    const MemberChatroom = sequelize.define("MemberChatroom", {

    });

    MemberChatroom.associate = function (models) {
        MemberChatroom.hasMany(models.MemberMessage, {
            onDelete: "cascade"
        });

        MemberChatroom.belongsTo(models.members, {
            forgienKey: {
                allowNull: true
            }
        })
    }

    return MemberChatroom;
};
