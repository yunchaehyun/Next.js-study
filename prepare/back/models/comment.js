module.exports = (sequelize, DataTypes) => {
    // User 테이블
    const Comment = sequelize.define(
      "Comment",
      {
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // UserId:
        // PostId: 
        // belongs to 를 사용하면, 위와 같은 컬럼이 생긴다.
      },
      {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 이모티콘 저장
      }
    );
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);

    };
    return Comment;
  };
  