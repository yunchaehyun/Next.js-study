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
        charset: "utf8",
        collate: "utf8_general_ci", // 이모티콘 저장
      }
    );
    Image.associate = (db) => {};
    return Image;
  };
  