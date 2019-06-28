module.exports = function (sequelize, DataTypes) {
    const Chatroom = sequelize.define("Chatroom", {

    });

    Chatroom.associate = function (models) {
        Chatroom.hasMany(models.Message, {
            onDelete: "cascade"
        });

        // Chatroom.belongsTo(models.members, {
        //     forgienKey: {
        //         allowNull: true
        //     }
        // })

        Chatroom.belongsTo(models.bands, {
            forgienKey: {
                allowNull: true
            }
        })
    }



    return Chatroom;
};
