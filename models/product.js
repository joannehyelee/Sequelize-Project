module.exports = function (sequelize, DataTypes) {
    const videoGame = sequelize.define("videGame", {
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [50]
            }
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            }
        },
    });

    videoGame.associate = function (models) {

        Product.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return videoGame;
};