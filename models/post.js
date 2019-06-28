module.exports = function (sequelize, DataTypes) {
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
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type:DataTypes.STRING,
      allowNull: false
    }
  });

  // Post.associate = function(models) {
  //   Post.hasMany(models.comments);
  // };

  return Post;
};
