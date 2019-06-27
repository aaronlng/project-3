module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define("post", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    // userName: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // },
    textBody: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    email:{
      type:DataTypes.STRING
    }
  });

  // Post.associate = function(models) {
  //   Post.hasMany(models.comments);
  // };

  return Post;
};
