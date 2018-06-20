

module.exports = function (sequelize, DataTypes) {
  const Game = sequelize.define('Game', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
  // Game.associate = function (models) {
  //   // associations can be defined here
  //   Game.belongsTo(models.Purchase, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };
  return Game;
};
