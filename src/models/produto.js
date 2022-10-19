module.exports = (sequelize, DataTypes) => {
    const tableDefinitions = {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        nome:{
            type: DataTypes.STRING,
        },
    };
    const tableConfigurations = {
        tableName:'produtos',
        timestamp: false,
    }
    
    const produto = sequelize.define('produto', tableDefinitions, tableConfigurations);
    return produto
}