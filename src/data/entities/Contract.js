module.exports = (sequelize, dataTypes) => {
  const Contract = sequelize.define("Contract", {
    name: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true
    },
    mainAccount: {
      type: dataTypes.STRING,
      allowNull: false
    },
    currency: {
      type: dataTypes.ENUM,
      values: ["soles", "dolares"],
      allowNull: false
    },
    instalmentDay: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    startHour: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    accountsCreation: {
      type: dataTypes.ENUM,
      values: ["true", "false"],
      allowNull: false
    }
  });

  Contract.associate = function(models) {
    Contract.hasMany(models.Payee);
  };

  return Contract;
};
