const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require ('../config/config')[env];

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
