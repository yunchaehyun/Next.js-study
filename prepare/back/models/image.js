module.exports = (sequelize, DataTypes) => {
    // User 테이블
    const Image = sequelize.define(
      "Image",
      {
        content: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
      },
      {
        modelName: 'Image',
        tableName: 'images',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post);
    };
    return Image;
  };
  