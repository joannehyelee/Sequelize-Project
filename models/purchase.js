

module.exports = function (sequelize, DataTypes) {
  const Purchase = sequelize.define('Purchase', {
    date: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Purchase.associate = function (models) {
    // associations can be defined here
    Purchase.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
    Purchase.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Purchase;
};
