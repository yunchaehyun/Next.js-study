module.exports = (sequelize, DataTypes) => {
    // User 테이블
    const Hashtag = sequelize.define(
      "Hashtag",
      {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
      },
      {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 이모티콘 저장
      }
    );
    Hashtag.associate = (db) => {};
    return Hashtag;
  };
  