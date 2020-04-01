module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,140]
            }
        },
        devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
        }
    });
    return Burger;
};